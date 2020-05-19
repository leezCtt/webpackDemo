const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js'
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
        //生成文件夹
        filename: 'bundle.js',
        //生成文件路径
        path: path.resolve('./dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}