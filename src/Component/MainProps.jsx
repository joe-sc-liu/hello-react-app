import React, { Component } from 'react'
import SubProps from './SubProps'

class MainProps extends Component {
    render() {
        //設定SubProps元件的，name屬性為joe
        return <SubProps name="joe" />
    }
}

export default MainProps