import React from 'react'
import Option from './Option.js'


const Body = (props) => {
    return (
        <div className={props.className}>
            <ul>
                <li>
                    <Option type="text"/>
                </li>
                <li>
                    <Option type="multi_answer" />
                </li>
                <li>
                    <Option type="yes_no"/>
                </li>
            </ul>
        </div>
    );
}


export default Body;