import React from 'react'
import QuestionWidget from '../components/questionnarie/QuestionWidget.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'
import { addQuestion, saveQuestionnarie, editQuestionnarie } from '../actions'
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

    componentWillReceiveProps(nextProps) {
       this.setState({
         questions: nextProps.questions
       })
    }

    addQuestion() {
        this.props.addQuestion(this.props.id)
        this.setState({questions: this.props.questions})
    }

    saveQuestionnarie() {
        this.props.saveQuestionnarie(
            this.state.id,
            this.state.title,
            this.state.description,
            this.state.questions
        )
        this.setState({is_saved: true});
    }

    editQuestionnarie() {
        this.props.editQuestionnarie(
            this.state.title,
            this.state.description
        )
    }

    render() {
        return (
            <div>
                {this.state.is_saved ? <Redirect to="/"/>: undefined}

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
                        saveInput={this.editQuestionnarie.bind(this)}
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
                            /*<li>{question.id}</li>*/
                            <li key={question.id}>
                                <QuestionWidget
                                    id={question.id}
                                    description={question.description}
                                    answers={question.answers}
                                    questionnarie_id={question.questionnarie_id}
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
  editQuestionnarie: (title, description) => {
    dispatch(editQuestionnarie(title, description))
  },
  addQuestion: (questionnarie_id) => {
    dispatch(addQuestion(questionnarie_id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Questionnarie);