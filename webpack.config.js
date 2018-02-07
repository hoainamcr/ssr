const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production'; //TRUE or FALSE
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: ['css-loader', 'sass-loader'],
                    publicPath: "/public"
                });
const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
    entry: './src/app/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.js?$/,
                exclude: /node_module/
            },
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: [
                    'file-loader?name=[hash:6].[ext]&outputPath=images/&publicPath=images/',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo web',
            hash: true,
            template: './src/template.ejs'
        }),
        new ExtractTextPlugin({
            filename: "styles.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000,
        hot: !isProd,
        stats: "errors-only",
        // open: true
    }
};
