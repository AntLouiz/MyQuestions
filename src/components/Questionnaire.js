import React from 'react'
import PropTypes from 'prop-types'
import Header from './questionnaire/Header.js'
import Body from './questionnaire/Body.js'
import SideMenuOptions from './questionnaire/SideMenuOptions.js'


class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container columns'>
                <SideMenuOptions className="column is-4"/>
                <div className="column is-12">
                    <Header 
                        title={this.props.title}
                    />
                    <Body 
                        _key={this.props._key}
                        className="column is-7"
                    />
                </div>
            </div>
        );
    }
}

Questionnaire.propTypes = {
    id: PropTypes.integer,
    _key: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    questions: PropTypes.array,
    is_saved: PropTypes.bool,
    saveQuestionnaire: PropTypes.func,
    updateQuestionnaire: PropTypes.func
}

export default Questionnaire;