'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');

const webpack = require('webpack');

module.exports = function () {

    var result = {
        devtool: 'source-map',
        entry: [
            './src/index.js'
        ],
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js',
            publicPath: './build/'
        },

        devServer: {
            publicPath: './build/',
            open: true,
            port: 9000,
            writeToDisk: true,
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ["@babel/plugin-proposal-class-properties"]
                        }
                    },
                },
                {
                    test: /\.scss/,
                    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?name=[name].[ext]&limit=100000&minetype=application/font-woff'
                }
            ]
        },

        plugins: []
    };

    if (NODE_ENV === 'production') {
        result.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true,
                    unsafe: true
                }
            })
        );
    }

    return result;
};
