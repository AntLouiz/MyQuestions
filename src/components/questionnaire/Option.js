import React from 'react'
import PropTypes from 'prop-types'
import YesNoOption from './options/YesNoOption.js'
import MultiAnswerOption from './options/MultiAnswerOption.js'
import TextOption from './options/TextOption.js'


const Option = (props) => {
    let options = {
        'yes_no': <YesNoOption description={props.description}/>,
        'multi_answer': <MultiAnswerOption description={props.description} />,
        'text': <TextOption description={props.description} />
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