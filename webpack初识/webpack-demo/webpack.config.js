const path = require('path')

module.exports = {
    //打包路径
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        //生成文件夹
        filename: 'myFirseWebpack.js',
        //生成文件路径
        path: path.resolve(__dirname, 'dist')
    },
}