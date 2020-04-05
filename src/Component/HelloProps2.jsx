//匯入react元件
import React from 'react'

//  注意元件開頭第一個字母都要大寫
class HelloProps2 extends React.Component {
    render() {
        return <h1>Hello ,{this.props.name}！</h1>
    }
}

//輸出元件
export default HelloProps2
