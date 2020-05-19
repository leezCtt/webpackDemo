const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename, 'utf-8')
    //生成抽象语法树
    const ast = parser.parse(content,{
        sourceType: 'module'
    })

    const dependencies = {}

    //遍历引入模块
    traverse(ast,{
        ImportDeclaration({node}) {
            const dirname = path.dirname(filename)
            const newFile = './' + path.join(dirname, node.source.value)
            dependencies[node.source.value] = newFile
        }
    })

    //转换抽象语法数
    const { code } = babel.transformFromAst(ast, null, {
        presets: ['@babel/preset-env']
    })
   
    return {
        filename,
        dependencies,
        code
    }
}


//生成依赖图谱
const makeDependenciesGraph = (entry) => {
    const entryModule = moduleAnalyser(entry)
    
    let graphArray = [ entryModule ]

    for(let i = 0; i < graphArray.length; i++){
        const item = graphArray[i]
        const { dependencies } = item
        if(dependencies){
            for(let j in dependencies){
                graphArray.push(moduleAnalyser(dependencies[j]))
                
            }
        }
    }
    
    const graph = {}
    graphArray.forEach(
        (i) => {
            graph[i.filename] = { 
                dependencies: i.dependencies,
                code: i.code
             }
        }
    )

    return graph
}


//生成代码
const generateCode = (entry) => {
    const graph = JSON.stringify(makeDependenciesGraph(entry))
    return `
        (function(graph){
            function require(module){
                function localRequire(relativePath){
                    return require(graph[module].dependencies[relativePath])
                }
                var exports = {}
                (function(require, exports, code){
                    eval(code)
                })(localRequire, exports, graph[module].code)
                return exports
            }
            require('${entry}')
        })(${graph})
    `
}

const code = generateCode('./src/index.js')
console.log(code)