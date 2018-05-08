import React from 'react'
import scrollToComponent from 'react-scroll-to-component';
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

    componentDidMount() {
        let question_description = this.refs.description.props.value;
        console.log(question_description)

        !!question_description ? undefined : scrollToComponent(this.refs.description)
    }

    saveQuestionDescription(new_desc) {
        this.setState({description: new_desc});
        this.props.saveQuestionDescription(this.state);
    }

    editQuestionDescription(new_desc) {
        this.setState({description: new_desc});
    }

    removeQuestion() {
        this.props.removeQuestion(this.state)
    }

    addAnswer() {
        let input_type = this.refs.select_input_type.children[0].text;
        console.log(input_type);
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
                                        type={'text'}
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <EditInput 
                        id={this.state.id} 
                        value={this.state.description}
                        placeholder={"Insert the question"}
                        ref="description"
                        saveInput={this.saveQuestionDescription.bind(this)}
                        editInput={this.editQuestionDescription.bind(this)}
                    />
                    <a 
                        className="button is-text"
                        onClick={this.removeQuestion.bind(this)}
                    >
                        remove
                    </a>
                </div>
                <div>
                    <Answers />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <button 
                        className="button is-success is-rounded"
                        onClick={this.addAnswer.bind(this)}
                    >
                        Add Answer
                    </button>
                    <div className="field">
                      <label className="label">Answer Type</label>
                      <div className="control">
                        <div className="select">
                          <select ref="select_input_type">
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