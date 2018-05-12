import React from 'react'
import QuestionWidget from '../components/questionnarie/QuestionWidget.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'
import AddQuestions from '../containers/questions/AddQuestions.js'
import { addQuestion, saveQuestionnarie } from '../actions'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import store from '../store.js'


class Questionnarie extends React.Component {
    constructor(props) {
        super(props);
        this.store = store;
        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            questions: this.props.questions,
            is_saved: false
        }
    }

    addQuestion() {
        this.props.addQuestion(this.props.id)
        this.setState({questions: this.props.questions})
    }

    saveQuestionnarie() {
        console.log("SAVE QUESTIONNARIE");
        this.props.saveQuestionnarie(
            this.state.id,
            this.state.title,
            this.state.description,
            this.state.questions
        )
        this.setState({is_saved: true});
    }

    render() {
        return (
            <div>
                {this.state.is_saved ? <Redirect to="/"/>: false}

                <div style={{fontSize: "2.5rem", marginLeft: "5rem"}}>
                    <button 
                        className="button is-success is-rounded is-medium"
                        onClick={this.saveQuestionnarie.bind(this)}
                    > 
                        Save Questionnarie 
                    </button>
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
                        saveInput={(desc) => this.setState({description: desc})}
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
                    {this.state.questions.map((question) => {
                        return (
                            <li key={question.id}>
                                <QuestionWidget
                                    id={question.id}
                                    description={question.description}
                                    answers={question.answers}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({
  id: store.questionnarie.id,
  description: store.questionnarie.description,
  title: store.questionnarie.title,
  questions: store.questionnarie.questions
})

const mapDispatchToProps = (dispatch) => ({
  saveQuestionnarie: (id, title, description, questions) => {
    dispatch(saveQuestionnarie(id, title, description, questions))
  },
  addQuestion: (questionnarie_id) => {
    dispatch(addQuestion(questionnarie_id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Questionnarie);