//匯入react元件
import React from 'react'
import HelloProps2 from './HelloProps2'

//  注意元件開頭第一個字母都要大寫
class HelloProps1 extends React.Component {
    render() {
        return (
            <div>
                <HelloProps2 name={this.props.name} />
            </div>
        )
    }
}

//輸出元件
export default HelloProps1