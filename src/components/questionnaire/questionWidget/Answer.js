import React from 'react'
import PropTypes from 'prop-types'
import EditInput from '../../models/EditInput.js'
import shortid from 'shortid'
import RadioAnswer from './answer/RadioAnswer.js'

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            question_id: props.question_id,
            description: props.description,
            value: props.value,
            type: props.type
        }
    }

    saveAnswer(new_desc) {
        this.setState({description: new_desc}, (
            this.props.editAnswer(this.state)
        ));
    }

    removeItself() {
        this.props.removeAnswer(this.state.id, this.state.question_id);
    }

    editAnswer(new_desc) {
        this.setState({description: new_desc});
    }

    chooseAnswer() {
        const answers_choices = {
            radio: (
                <RadioAnswer
                    description={this.state.description}
                    question_id={this.state.question_id}
                    saveAnswer={this.saveAnswer.bind(this)}
                    editAnswer={this.editAnswer.bind(this)}
                />
            ),
            text: (
                <EditInput
                    id={this.state.id} 
                    value={this.state.description}
                    placeholder={"Text answer"}
                />
            ),
            number: (
                <EditInput
                    id={this.state.id} 
                    value={this.state.description}
                    placeholder={"Numbered answer"}
                    type="number"
                />
            )
        }

        return answers_choices[this.state.type];
    }

    render() {
        return (
            <div style={{fontSize: "1.2rem"}}>
                {this.chooseAnswer()}
                <a 
                    className="button is-text"
                    onClick={this.removeItself.bind(this)}
                >
                    remove
                </a>
            </div>
        );
    }
}

Answer.propTypes = {
    id: PropTypes.integer,
    question_id: PropTypes.integer,
    description: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    editAnswer: PropTypes.func
}

export default Answer;