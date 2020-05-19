class CopyrightWebpackPlugin {
    constructor(options) {
    
    }

    apply(compiler) {

        // compile为生命周期函数
        // tap为同步方法使用
        compiler.hooks.compile.tap(
            'CopyrightWebpackPlugin',
            () => {
                console.log()
            }
        )


        //compiler webpack实例
        // emit为生命周期函数
        // tapAsync为异步方法使用
        compiler.hooks.emit.tapAsync(
            'CopyrightWebpackPlugin',
            (compilation, cb) => {
                debugger
                //向打包文件当中新增文件
                compilation.assets['copyright.txt'] = {
                    //文件内容
                    source: function() {
                        return 'copyright by tonggang'
                    },
                    //文件大小
                    size: function() {
                        return 21
                    }
                }
                cb()
            }
        )
    }
}

module.exports = CopyrightWebpackPlugin