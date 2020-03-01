//匯入react元件
import React from 'react'

//  注意元件開頭第一個字母都要大寫
class ES6Component extends React.Component {
    // render 是 Class based 元件唯一必須的方法（method）
    render() {
        return (
            <div>ES6 Component Hello, World!</div>
        );
    }
}

//輸出元件
export default ES6Component
