import React from 'react'
import scrollToComponent from 'react-scroll-to-component'
import EditInput from '../models/EditInput.js'
import shortid from 'shortid'
import Answer from './questionWidget/Answer.js'
import dispatch from 'redux'
import { connect } from 'react-redux'
import { removeQuestion, editQuestion } from '../../actions'

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

    editQuestion(new_description) {
        this.props.editQuestion(this.state.id, new_description)
    }

    removeItself() {
        this.props.removeQuestion(this.state.id)
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
                                        type={answer.type}
                                        description={answer.description}
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
                        editInput={(description) => this.setState({description: description})}
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

const mapDispatchToProps = (dispatch) => ({
  removeQuestion: (id) => dispatch(removeQuestion(id)),
  editQuestion: (id, description) => dispatch(editQuestion(id, description))
})

export default connect(null, mapDispatchToProps)(QuestionWidget);