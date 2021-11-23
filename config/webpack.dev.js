const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
    mode: 'development',
    devtool: 'eval',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'public', 'index.html'),
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
});