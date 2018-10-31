const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');

//配置webpack服务器启动的端口
const webpackServer = {  
    protocol:'http://',  
    host:'localhost',   
    port:'5000'    //端口号
}  
module.exports = {
    stats: 'errors-only',
    entry: './src/main.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './public/dist'),//Webpack结果存储
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
                loader: "style-loader!css-loader"
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
    devServer: {//webpack-dev-server配置
        historyApiFallback: true,//不跳转
        hot: true,
        inline: true,//实时刷新
        progress: true,
        port: webpackServer.port,
        host:webpackServer.host,
        proxy: {
            '/api': {
                target: 'http://localhost:7000',
                changeOrigin: true,
                pathRewrite: {
                '^requires': '/api'
                }
            }
        }, 
    },
    
    performance: {
        hints: false
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
         }),
        new VueLoaderPlugin(),
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