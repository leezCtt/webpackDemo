const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const produceConfig = {
    mode: 'production',
    devtool: 'none',
    plugins: [
        new CleanWebpackPlugin({
            protectWebpackAssets: path.join(process.cwd(), 'build/')
        }),
    ]
}

module.exports = merge(produceConfig, commonConfig)