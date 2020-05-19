可以使用  env 环境变量
module.exports = (env) => {
    return env && env.production ?
            merge(commonConfig, prodConfig) :
            merge(commonConfig, devConfig)
}
可以在 package.json 当中设置
"build": "webpack --env.production --config ./config/webpack.common.js"