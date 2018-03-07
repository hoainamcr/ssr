const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const boostrapEntryPoints = require('./webpack.bootstrap.config')
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const isProd = process.env.NODE_ENV === 'production'; //TRUE or FALSE
const cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
        {
            loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                    return [
                        require('precss'),
                        require('autoprefixer')
                    ];
                }
            }
        }, {
            loader: 'sass-loader' // compiles Sass to CSS
        }
    ],
    publicPath: './public'
  })
const cssConfig = isProd ? cssProd : cssDev;
const bootstrapConfig = isProd ? boostrapEntryPoints.prod : boostrapEntryPoints.dev;
module.exports = {
    entry: {
        app: './src/app/app.js',
        'font-awesome': "font-awesome/scss/font-awesome.scss",
        bootstrap: bootstrapConfig
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.js?$/,
                exclude: /node_module/
            },
            {
                test: /\.scss|css$/,
                use: cssConfig
            },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            // }, {
            //     test: /\.(ttf|otf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             outputPath: 'fonts',
            //             publicPath: 'fonts',
            //         },
            //     }],
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?name=/assets/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=/assets/[name].[ext]'
                ]
            },
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //         'file-loader?name=images/[name].[ext]',
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 bypassOnDebug: true,
            //             },
            //         }
            //     ]
            // },
            // { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000?name=fonts/[name].[ext]' },
            // { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports-loader?jQuery=jquery' },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo web',
            hash: true,
            template: './src/template.ejs'
        }),
        new ExtractTextPlugin({
            filename: "/css/[name].css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
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
