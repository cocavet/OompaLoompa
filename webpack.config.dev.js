const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: './front/js/main.js',

    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: '[name].js'
    },

    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\/node_modules\/zepto\/dist\/zepto\.js$/,
                loader: "imports-loader?this=>window"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'zepto/zepto.min.js'
        })
    ]
};