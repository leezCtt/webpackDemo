const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true,
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                //css-loader 会分析css文件  并打包
                //style-loader 会把打包之后的文件挂载在页面上面
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    output: {
        //生成文件夹
        filename: '[name].js',
        //分割文件的名字
        chunkFilename: '[name].chunk.js',
        //生成文件路径
        path: path.resolve(__dirname, '../build')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(commonConfig, devConfig)

