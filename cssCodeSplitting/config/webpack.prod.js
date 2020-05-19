const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path')

const produceConfig = {
    mode: 'production',
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader 会分析css文件  并打包
                //style-loader 会把打包之后的文件挂载在页面上面
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin([])
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            protectWebpackAssets: path.join(process.cwd(), 'build/')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}

module.exports = merge(produceConfig, commonConfig)