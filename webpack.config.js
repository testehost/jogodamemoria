const path = require('path');


module.exports = {
    mode: 'development',
    entry: "./src/assets/js/index.js",
    output: {
        path: path.resolve(__dirname, 'dist', 'assets', 'js'),
        filename: 'bundle.js'
    },
    devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 3000,
		open: true
	},
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            exclude: /node_modules/,
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }]
    },
    devtool: 'source-map'
}