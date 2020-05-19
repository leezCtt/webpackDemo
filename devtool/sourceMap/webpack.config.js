const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        //开启devServer  运行路径
        contentBase: './dist',
        //运行的时候是否自动打开浏览器
        open: true,
        //配置代理
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader 会分析css文件  并打包
                //style-loader 会把打包之后的文件挂载在页面上面
                use: ['style-loader', 'css-loader']
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
    output: {
        publicPath: '/',
        //生成文件夹
        filename: 'bundle.js',
        //生成文件路径
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}