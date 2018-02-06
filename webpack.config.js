module.exports = {
    entry: './src/app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
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
            }
        ]
    }
};
