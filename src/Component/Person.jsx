//匯入react元件
import React from 'react'
import PropTypes from 'prop-types'

//  注意元件開頭第一個字母都要大寫
const Person = (props) => {
    return (
        <div>
            <p> I'm {props.name} and I'am {props.age} yesrs old.</p>
            <p>{props.children}</p>
        </div>
    )
};

// //類別元件寫法
// class person extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p> I'm {this.props.name} and I'am {this.props.age} yesrs old.</p>
//                 <p>{this.props.children}</p>
//             </div>            
//         );
//     }
// }

// PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

export default Person;
