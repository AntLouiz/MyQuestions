import React from 'react'
import PropTypes from 'prop-types'
import Option from './Option.js'


const Body = (props) => {
    return (
        <div className={props.className}>
            <ul>
                <For each="key" of={Object.keys(props.options)}>
                    <Option 
                        id={key}
                        type={props.options[key].type}
                    />
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