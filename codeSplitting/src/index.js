function getComponent() {
    return import(/* webpackChunkName:"lodash" */'lodash').then(
        (e) => {
            var element = document.createElement('div')
            element.innerHTML = window._.join(['dell', ' ', 'lee'], '-')
            return element
        }
    )
}


getComponent()
.then(
    (ele) => {
        document.body.appendChild(ele)
    }
)