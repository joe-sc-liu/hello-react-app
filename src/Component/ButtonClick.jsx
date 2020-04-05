//匯入react元件
import React from 'react'

class ButtonClick extends React.Component {
    handleButtonClick() {
        alert('Thank you')
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>Say Hello</button>
        )
    }
}


// ////以下寫法是錯誤的，請注意
// ////沒有內部狀態、沒有實作物件和 ref，沒有生命週期函數
// const ButtonClick = () => (
//     handleButtonClick() {
//         alert('Thank you')
//     }

//     <button onClick={this.handleButtonClick}>Say Hello</button>
// )


export default ButtonClick