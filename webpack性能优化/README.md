1.node yarn webpack  版本尽可能是最新的稳定版本

2.在尽可能少的模块上面使用loader
    babel-loader 规定需要打包的路径
        include: path.resolve(__dirname, '../src')

3.plugin 尽可能的精简并确保可靠性

4.resolve 参数合理配置
     resolve: {
        //方便引用 不需要写后缀
        extensions: ['.js', '.jsx'],
        //配置别名
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },

5.使用 DllPlugin 提高打包速度
    详见此项目代码


6.控制包的大小
    tree-shaking
    code-splliting

7.thread-loader parallel-webpack happypack 多进程打包

8.合理运用sourceMap

9.结合 stats 分析打包结果

10.开发环境使用内存编译,无用插件剔除

