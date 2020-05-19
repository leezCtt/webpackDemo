import "@babel/polyfill"
import React, { Component, lazy } from 'react'
import ReactDom from 'react-dom'


class App extends Component {
    render() {
        return <div></div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)