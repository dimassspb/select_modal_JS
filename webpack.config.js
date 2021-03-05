const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),

        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
        module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
            },
            
        ],
        },
    };