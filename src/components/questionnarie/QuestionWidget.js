import React from 'react'
import scrollToComponent from 'react-scroll-to-component'
import EditInput from '../models/EditInput.js'
import shortid from 'shortid'
import Answer from './questionWidget/Answer.js'

class QuestionWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            description: props.description,
            questionnarie_id: props.questionnarie_id,
            answers: props.answers
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({description: nextProps.description, answers: nextProps.answers})
    }

    componentDidMount() {
        let question_description = this.refs.description.props.value;

        !!question_description ? undefined : scrollToComponent(this.refs.description)
    }

    editQuestion(new_description) {
        this.props.editQuestion(new_description, this.state.id);
        this.setState({description: new_description});
    }

    removeItself() {
        this.props.removeQuestion(this.state.id)
    }

    addAnswer() {
        let option_index = this.refs.select_input_type.selectedIndex;
        let answer_type = this.refs.select_input_type.children[option_index].text;
        let empty_answer = {
            id: shortid.generate(),
            answer_type: answer_type,
            description: "Herroo",
            value: undefined,
            question_id: this.state.id
        }
        this.props.addAnswer(empty_answer)
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
                                        type={answer.answer_type}
                                        description={answer.description}
                                        removeAnswer={this.props.removeAnswer}
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
                        saveInput={this.editQuestion.bind(this)}
                        editInput={this.editQuestion.bind(this)}
                    />
                    <a 
                        className="button is-text"
                        onClick={this.removeItself.bind(this)}
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
                      <label className="label">Answer Type: </label>
                      <div className="control">
                        <div className="select">
                          <select ref="select_input_type">
                            <option>radio</option>
                            <option>text</option>
                            <option>number</option>
                          </select>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionWidget;