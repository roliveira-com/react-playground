const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    // Configura webpack para ler arquivos sem especificar extensões
    resolve : {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}