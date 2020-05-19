const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
//编译器
const complier = webpack(config)

const app = express()

app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath,

}))

app.listen(8080, () => {
    console.log('服务已经开启')
})