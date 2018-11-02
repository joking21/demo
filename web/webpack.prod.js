const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 

module.exports = {
    stats: 'errors-only',
    entry: './src/main.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './dist'),//Webpack结果存储
        filename: 'build.js' //[name.js]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                　　  test: /\.css$/,
                　　  use: [
                  　　  　　MiniCssExtractPlugin.loader,
                  　　 　　 "css-loader"
                 　　 ]
              　　  },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
              },
              {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
                loader: 'url-loader?limit=100000'
              }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    performance: {
        hints: false
    },
    devtool: '#cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
           template: 'index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
        　　filename: "[name].[chunkhash:8].css",
        　　chunkFilename: "[id].css"
    　　 })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
}