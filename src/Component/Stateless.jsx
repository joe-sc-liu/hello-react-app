import React from 'react'

//無狀態元件(stateless component)
const Stateless = (props) => {
    const sayHi = (event) => alert('Hello World')
    return <div onClick={sayHi}>Hello World</div>
}
export default Stateless
