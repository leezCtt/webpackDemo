const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        react: ['react', 'react-dom'],
        vendors: ['lodash']
    },
    mode: 'production',
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../vendor'),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '../vendor/[name].manifest.json')
        })
    ]
}