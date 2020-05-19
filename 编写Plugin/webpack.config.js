const path = require('path')
const CopyRightWebpackPlugin = require('./plugins/copyriight-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new CopyRightWebpackPlugin({
            name: 'tonggang'
        })
    ]
}