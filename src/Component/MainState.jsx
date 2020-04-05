import React, { Component } from 'react'

class MainState extends Component {
    constructor(props) {
        //若要使用這個方法
        super(props) //必須先執行super(props)，若有用到props的話會找不到this.props，沒用到props也可以只寫super()
        this.state = {
            currentPage: 'one', //給預設值
        }
    }

    clickHandler = (e) => {
        this.setState({ currentPage: e })
    }

    render() {
        return (
            <div>
                <h3>{this.state.currentPage}</h3>
                <ul>
                    <li onClick={() => this.clickHandler('one')}>one</li>
                    <li onClick={() => this.clickHandler('two')}>two</li>
                </ul>
            </div>
        )
    }
}
export default MainState