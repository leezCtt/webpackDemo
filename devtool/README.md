        sourceMap 是一个映射关系  可以显示打包之后文件对应开发时的文件
        devtool 设置为 source-map 会生成map文件
        设置为 inline-source-map 不会生成map文件  但是会在打包之后的文件本身后面添加sourceMapUrl
        设置为 evel 不会生成map文件  但是会在代码里面使用eval 形成map展示
        设置为 cheap-module-evel-source-map 开发环境中比较实用



        webpackDevServer

        webpack --watch  当需要打包的文件发生变化  就会自动打包
        webpack-dev-server 命令  可以直接开启服务器监听代码变化

        webpack-dev-middleWare  可以自己配置中间件



        hot Module Replacement

        使用hmr的时候需要使用  webpack.HotModuleReplacementPlugin  plugin