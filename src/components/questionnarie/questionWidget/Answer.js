import React from 'react'
import EditInput from '../../models/EditInput.js'
import shortid from 'shortid'
import RadioAnswer from './answer/RadioAnswer.js'
import { connect } from 'react-redux'
import { saveAnswer } from '../../../actions'

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
        console.log(this.state.description)
        this.setState(prev => {description: new_desc});
        this.props.saveAnswer(
            this.state.id, 
            new_desc,
            this.state.question_id
        );
    }

    removeAnswer() {
        this.props.removeAnswer(this.state);
    }

    editAnswer(new_desc) {
        this.setState(prev => {description: new_desc});
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
                    placeholder={"Insert the answer"}
                    saveInput={this.saveAnswer.bind(this)}
                    editInput={this.editAnswer.bind(this)}
                />
            ),
            number: (
                <EditInput
                    id={this.state.id} 
                    value={this.state.description}
                    placeholder={"Insert the answer"}
                    type="number"
                    saveInput={this.saveAnswer.bind(this)}
                    editInput={this.editAnswer.bind(this)}
                />
            )
        }

        return answers_choices[this.state.type];
    }

    render() {
        return (
            <div>
                {this.chooseAnswer()}
                <a 
                    className="button is-text"
                    onClick={this.removeAnswer.bind(this)}
                >
                    remove
                </a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  saveAnswer: (id, description, question_id) => dispatch(saveAnswer(id, description, question_id))
})


export default connect(null, mapDispatchToProps)(Answer);