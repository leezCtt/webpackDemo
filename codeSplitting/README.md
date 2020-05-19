

同步加载需要在 webpack当中 做
optimization: {
        //配置代码分割
        splitChunks: {
            chunks: 'all'
        }
    },




动态加载需要安装 babel-plugin-dynamic-webpack 插件
在.babelrc 里面配置plugin即可

//使用chunkname需要替换为  @babel/plugin-syntax-dynamic-import 插件
"plugins": ["@babel/plugin-syntax-dynamic-import"]


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
                    // filename: 'vendors.js'
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