const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        client: {
            reconnect: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.module\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'src', 'assets', 'favicon', 'stupid.png'),
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        })
    ]
}