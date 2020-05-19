import "@babel/polyfill"
import React, { Component, lazy } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'


class App extends Component {

    componentDidMount() {
        axios.get('/react/api/header.json')
            .then(
                 (res) => {
                    console.log(res)
                 }
            )
    }

    render() {
        return <div>hello, world</div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)