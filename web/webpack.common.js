const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/main.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './dist'),//Webpack结果存储
        filename: 'js/[name].[hash:8].js',
        publicPath: '/',   // 增加这个的原因是：之前vue动态路由参数，跳转之后，刷新页面，页面静态资源找不到
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, './src/assets'),
            components: path.resolve(__dirname, './src/components'),
            common: path.resolve(__dirname, './src/common'),
            store: path.resolve(__dirname, './src/store'),
            css: path.resolve(__dirname, './src/css'),
            views: path.resolve(__dirname, './src/views'),
        }
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
                test: /\.(woff)|(eot)|(ttf)|(woff2)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        outputPath: 'fonts',
                        // publicPath: '/assets',
                    },
                }],
            },
            {
                test: /\.(png)|(jpg)|(gif)|(svg)|(jpeg)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        outputPath: 'img',
                    },
                }],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css",
            // chunkFilename: "[id].css"
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    priority: 10,
                    chunks: 'initial'
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    minChunks: 2,
                    enforce: true
                }
            }
        }
    },
}