const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //在此目录当中不使用babel-loader
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20480,
                            name: '[name]_[hash].[ext]',
                            outputPath: '/images'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '/fonts',
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        //开启tree-shanking
        usedExports: true,
        //配置代码分割
        splitChunks: {
            //做代码分割的时候对什么类型的代码分割
            //async 异步
            //all 所有
            //initial 同步
            chunks: 'all',
            //指定引入库大小为多少以上的时候再进行分割
            minSize: 30000,
            //同时加载的模块数
            maxAsyncRequests: 5,
            //入口文件引入的模块数
            maxInitialRequests: 3,
            //文件生成的连接符
            automaticNameDelimiter: '~',
            //打包生成文件可以规定名字
            name: true,
            //决定分割出来的文件到底要放在那个文件当中
            cacheGroups: {
                //指定引入同步代码路径在此下面才会使用分割
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    //打包优先级
                    priority: -10,
                    //文件名称
                    name: 'vendors.js'
                },
                //不满足vendors的要求时 会使用此参数
                default: {
                    priority: -20,
                    //避免重复打包代码
                    reuseExistingChunk: true,
                    filename: 'common.js'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
}