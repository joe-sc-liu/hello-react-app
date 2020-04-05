import React from 'react'

class TodoItem extends React.Component {
    handleItemClick = (e) => {
        //定義取得上一層元件props為onItemClick的事件
        const { onItemClick } = this.props
        //呼叫上層元件的onItemClick事件
        onItemClick(e.target.id)
    }

    render() {
        //children的值來自<TodoItem>text</TodoItem>中間text的值
        const { children, id, status } = this.props

        return (
            <li
                id={id}
                onClick={this.handleItemClick}
                //自定義屬性
                data-status={status}
                // 如果完成加上刪除線
                style={status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
            >
                {children}
            </li>
        )
    }
}

export default TodoItem