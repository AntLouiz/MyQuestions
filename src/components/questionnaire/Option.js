import React from 'react'
import PropTypes from 'prop-types'
import YesNoOption from './options/YesNoOption.js'
import MultiAnswerOption from './options/MultiAnswerOption.js'
import TextOption from './options/TextOption.js'


const Option = (props) => {
    let options = {
        'yes_no': <YesNoOption />,
        'multi_answer': <MultiAnswerOption />,
        'text': <TextOption />
    }

    const chooseOption = () => {
        return options[props.type]
    }

    return (
        <div className="card">
            {chooseOption()}
            <a>
                remove
            </a>
            <a>
                up
            </a>
            <a>
                down
            </a>
        </div>
    );
}

Option.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Option;