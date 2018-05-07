import React from 'react'
import EditInput from '../models/EditInput.js'
import Answer from './questionWidget/Answer.js'

class QuestionWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            description: props.description,
            answers: props.answers
        }
    }

    saveQuestionDescription(new_desc) {
        this.setState({description: new_desc});
        this.props.saveQuestionDescription(this.state);
    }

    editQuestionDescription(new_desc) {
        this.setState({description: new_desc});
    }


    render() {
        let style = {
            width: "40rem",
            margin: "2rem",
            fontSize: "2rem"
        }

        const Answers = () => {
            if(this.state.answers){
                return (
                    <ul>
                        {this.state.answers.map((answer) => {
                            return (
                                <li key={answer.id}>
                                    <Answer
                                        id={answer.id}
                                        question_id={this.state.id}
                                        description={answer.description}
                                        saveAnswer={this.props.saveAnswer}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                );
            }
            else
                return <ul></ul>
        }

        return (
            <div style={style} className="box">
                <EditInput 
                    id={this.state.id} 
                    value={this.state.description}
                    placeholder={"Insert the question"}
                    saveInput={this.saveQuestionDescription.bind(this)}
                    editInput={this.editQuestionDescription.bind(this)}
                />
                <div>
                    <Answers />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <button className="button is-success is-rounded">
                        Add Answer
                    </button>
                    <div class="field">
                      <label class="label">Answer Type</label>
                      <div class="control">
                        <div class="select">
                          <select>
                            <option>radio</option>
                            <option>input</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    </div>
            </div>
        );
    }
}


export default QuestionWidget