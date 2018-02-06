var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo web',
            hash: true,
            template: './src/template.ejs'
        })
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.js?$/,
                exclude: /node_module/
            }
        ]
    }
};
