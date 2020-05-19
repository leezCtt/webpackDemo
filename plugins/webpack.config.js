const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    //打包路径
    entry: {
        //可以设置多页面打包
        main: './src/index.js',
        sub: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [
            //使用loader
            {
                //规则为后缀名为.png的图片
                test: /\.(png|jpg|gif)$/,
                // use: {
                //     loader: 'file-loader',
                //     //给loader 增加额外配置
                //     options: {
                //         //输出名称  为 源文件名称.源文件后缀
                //         //[name] [hash] [ext]  为占位符
                //         name: '[name]_[hash].[ext]',
                //         //设置输出路径
                //         outputPath: 'images/'
                //     }
                // }

                //url-loader 会使文件小于默认值的时候  会返回文件的base64内容
                use: {
                    loader: 'url-loader',
                    //limit
                    options: {
                        //limit设置  文件转换为base64的最小大小  单位 字节
                        limit: 20480,
                        //输出名称  为 源文件名称.源文件后缀
                        //[name] [hash] [ext]  为占位符
                        name: '[name]_[hash].[ext]',
                        //设置输出路径
                        outputPath: 'images/'
                    }
                }
            },
            //使用css-loader
            {
                test: /\.css$/,
                //css-loader 会分析css文件  并打包
                //style-loader 会把打包之后的文件挂载在页面上面
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                //css-loader 会分析css文件  并打包
                //style-loader 会把打包之后的文件挂载在页面上面
                //sass-loader 用于吧scss解析成css
                //postcss-loader  这里使用了 autoprefixer插件  可以自动做css兼容
                use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                //importLoaders 设置 import的文件在 css-loader 前应用的 loader 的数量
                                importLoaders: 2,
                                //开启css模块化
                                modules: true
                            }
                        },
                        'sass-loader',
                        'postcss-loader'
                    ]
            }
        ]
    },
    output: {
        //生成文件夹
        filename: '[name].js',
        //生成文件路径
        path: path.resolve(__dirname, 'dist'),
        //设置引入默认路径
        // publicPath: './static'
    },
    //简化html文件的创建
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}