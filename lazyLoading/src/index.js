import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'



async function getComponent() {
    await import(/* webpackChunkName:"lodash" */'lodash')

    var element = document.createElement('div')
    element.innerHTML = window._.join(['dell', ' ', 'lee'], '-')
    return element
}

getComponent()
.then(
    (ele) => {
        document.body.appendChild(ele)
    }
)

document.addEventListener(
    'click',
    () => {
        const App = lazy( () => import('./App.js') )

        ReactDOM.render(
            <Suspense fallback={<div></div>}>
                <App/>
            </Suspense>,
            document.getElementById('root')
        )
    }
)





