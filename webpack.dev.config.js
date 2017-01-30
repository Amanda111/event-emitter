const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'main.js': ['./src/main.js', 'webpack-hot-middleware/client']
    },
    output: {
        path: '/',
        publicPath: 'http://localhost:3000/dist/',
        filename: '[name]'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },
        { 
            test: /muife.*?js$/, 
            loader: 'babel'
        },
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
        },
        {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    devtool: '#eval-source-map',
    resolve: {
        extensions: ['', '.js', '.vue'],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};
