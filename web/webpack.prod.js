const webpack = require('webpack');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    // stats: 'errors-only',  //  是否有显示文字输出
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles/[name].[chunkhash:8].css")
    ],
});