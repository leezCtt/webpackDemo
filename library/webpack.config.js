const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        //无论什么方式引用都可以通用
        library: 'library',
        libraryTarget: 'umd'
    }
}