import React from 'react'
import PropTypes from 'prop-types'
import Option from './Option.js'


const Body = (props) => {
    return (
        <div className={props.className}>
            <ul>
                <For each="option" of={props.options}>
                    <Option type={option.type} />
                </For>
            </ul>
        </div>
    );
}


Body.defaultProps = {
    options: []
}

Body.propTypes = {
    options: PropTypes.array.isRequired
}


export default Body;