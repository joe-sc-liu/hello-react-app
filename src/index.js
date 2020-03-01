import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import ES6Component from './ES6Component'
import FunctionalComponent from './FunctionalComponent'
import InlineStyle from './InlineStyle'
import PersonApp from './PersonApp'

//圈叉遊戲
//https://zh-hant.reactjs.org/tutorial/tutorial.html
//https://codepen.io/gaearon/pen/gWWZgR

ReactDOM.render(<App />, document.getElementById('root'))

// 將 <ES6Component /> 元件插入 id 為 TestMyComponent1 的 DOM 元素中
ReactDOM.render(<ES6Component />, document.getElementById('TestMyComponent1'));

// 將 <FunctionalComponent /> 元件插入 id 為 TestMyComponent1 的 DOM 元素中
ReactDOM.render(<FunctionalComponent />, document.getElementById('TestMyComponent2'));

ReactDOM.render(<div style={InlineStyle}>Hello World!</div>, document.getElementById('TestMyComponent3'));

ReactDOM.render(<PersonApp />, document.getElementById('TestMyComponent5'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
