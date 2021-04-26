const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.js');

module.exports = merge(webpackBaseConfig, {
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin(),
        ],
    },
    output: {
        publicPath: '',
    },

    plugins: [
        new CleanWebpackPlugin(),
    ],
});
