loader:
        loader是一个打包的方案  使得webpack 可以识别静态资源  打包静态资源

        url-loader 会使文件小于默认值的时候  会返回文件的base64内容

        webpack里面  loader是有执行顺序的  从下到上 从右到左


        字体文件需要用 file-loader 打包   test: /\.(eot|ttf|svg|woff)$/


        babel-loader 可以链接为 webpack 与 @babel/preset-env 以便将es6语法转化为es5语法， 
        但是这时候低版本浏览器还是没有peomise等一些内置函数 这时候需要使用"@babel/polyfill"
        此时打包可能会过大  可以为babel-loader添加option
        options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                //当使用 @babel/polyfill  只创建使用过的
                                useBuiltIns: 'usage'
                            }
                        ]
                    ]
                }
        也可以在根目录创建.babelrc文件
        添加options
        


       

        
