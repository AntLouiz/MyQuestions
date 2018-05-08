import React from 'react'
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

    saveAnswer() {
        this.props.saveAnswer(this.state);
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
                <a className="button is-text">
                    remove
                </a>
            </div>
        );
    }
}


export default Answer