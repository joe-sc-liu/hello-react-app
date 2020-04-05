import React, { Component } from 'react'
import Person from './Person'

//  注意元件開頭第一個字母都要大寫
// PersonApp.jsx 父組件 xxxApp
class PersonApp extends Component {
    render() {
        return (
            <div className="PersonApp">
                <h1>Hello World! React</h1>
                <Person name="Andy" age="21" />
                <Person name="Jack" age="kkk">
                    Hobby is coding
                </Person>
                <Person name={'Jo' + 1} age="21" />
            </div>
        )
    }
}

export default PersonApp
