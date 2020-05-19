const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const produceConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
}

module.exports = merge(produceConfig, commonConfig)