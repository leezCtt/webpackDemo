const loaderUtils = require('loader-utils')

module.exports = function(source) {
    //获取options
    const options = loaderUtils.getOptions(this)
    //可以使用异步代码
    const callback = this.async()

    setTimeout(
        () => {
            const result = source.replace('world', options.name)
            //函数参数为返回值
            callback(null, result)
        },
        1000
    )

    //等同于this.async的返回值

    // this.callback(
    //     err: Error | null,
    //     content: string | Buffer,
    //     sourceMap?: SourceMap,
    //     meta?: any
    //   )
    // this.callback(null, result)
}