import React from 'react'
import QuestionWidget from '../components/questionnaire/QuestionWidget.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'
import { addQuestion, saveQuestionnaire, updateQuestionnaire } from '../actions'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"


class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            description: props.description,
            questions: props.questions,
            is_saved: props.is_saved
        }
    }

    componentWillReceiveProps(nextProps) {
       this.setState({
            id: nextProps.id,
            title: nextProps.title,
            description: nextProps.description,
            questions: nextProps.questions,
            is_saved: nextProps.is_saved
       })
    }

    componentDidUpdate(nextState){
        if(this.state.is_saved) {
            this.props.updateQuestionnaire(this.state)
        }
    }

    addQuestion() {
        let empty_question = {
            id: shortid.generate(),
            description: null,
            answers: []
        }
        this.setState(prev => (this.state.questions.push(empty_question)))
    }

    removeQuestion(question_id) {
        this.setState({ questions: this.state.questions.filter((question)=>{
            return question.id !== question_id 
        })})
    }

    editQuestion(new_desc, question_id){
        this.setState(prev => (
            this.state.questions.map((question) => {
                if(question.id === question_id){
                    question.description = new_desc;
                }
            })
        ))
    }

    addAnswer(answer) {
        this.setState(prev => (
            this.state.questions.map((question) => {
                if(question.id === answer.question_id){
                    if(question.answers)
                        question.answers.push(answer)
                    else
                        question.answers = [answer]
                }
            })
        ))
    }

    editAnswer(answer_target){
        this.setState(prev => (
            this.state.questions.map((question) => {
                if(question.id === answer_target.question_id){
                    question.answers.map((answer) => {
                        if(answer.id === answer_target.id){
                            answer.description = answer_target.description;
                        }
                    })
                }
            })
        ))
    }

    removeAnswer(answer_id, question_id){
        this.setState(prev => (
            this.state.questions.map((question) => {
                if(question.id === question_id){
                    question.answers = question.answers.filter((answer) => {
                        return answer.id !== answer_id;
                    })
                }
            })
        ))
    }

    saveQuestionnaire() {
        if(this.state.is_saved) {
            this.props.updateQuestionnaire(this.state)
        }

        else {
            this.props.saveQuestionnaire(this.state);
            this.setState({is_saved: true});
        }
    }

    editQuestionnaire() {
        this.setState({title: this.state.title, description: this.state.description})
    }

    render() {
        return (
            <div>
                <div style={{fontSize: "2.5rem", marginLeft: "5rem"}}>
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Title"}
                        value={this.state.title}
                        placeholder={"Insert the title"}
                        saveInput={(new_title) => this.setState({title: new_title})}
                        editInput={(new_title) => this.setState({title: new_title})}
                    />
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Description"}
                        value={this.state.description}
                        placeholder={"Insert the description"}
                        saveInput={this.editQuestionnaire.bind(this)}
                        editInput={(desc) => this.setState({description: desc})}
                    />
                    <button state
                        className="button is-success is-rounded"
                        onClick={this.addQuestion.bind(this)}
                    >
                        Add question
                    </button>
                </div> 
                <ul style={{listStyle: "decimal"}}>
                    {this.state.questions.map((question, index) => {
                        return (
                            <li key={question.id}>
                                <QuestionWidget
                                    id={question.id}
                                    description={question.description}
                                    answers={question.answers}
                                    questionnaire_id={question.questionnaire_id}

                                    editQuestion={this.editQuestion.bind(this)}

                                    removeQuestion={this.removeQuestion.bind(this)}
                                    addAnswer={this.addAnswer.bind(this)}
                                    editAnswer={this.editAnswer.bind(this)}
                                    removeAnswer={this.removeAnswer.bind(this)}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  saveQuestionnaire: (new_questionnaire) => {
    dispatch(saveQuestionnaire(new_questionnaire))
  },
  updateQuestionnaire: (questionnaire) => {
    dispatch(updateQuestionnaire(questionnaire))
  }
})

Questionnaire.defaultProps = {
    title: "",
    description: "",
    questions: [],
    is_saved: false,
}

export default connect(null, mapDispatchToProps)(Questionnaire);