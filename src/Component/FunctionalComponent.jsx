//匯入react元件
import React from 'react'

//Functional Component 寫法
//必須沒有內部狀態、沒有實作物件和 ref，沒有生命週期函數

//  注意元件開頭第一個字母都要大寫
// 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI）
//，減少副作用（side effect）
const FunctionalComponent = () => (
    <div>Functional Component Hello, World!</div>
)

// function FunctionalComponent() {
//     return (
//         <div>Functional Component Hello, World Part 2!</div>
//     );
// }

//輸出元件
export default FunctionalComponent
