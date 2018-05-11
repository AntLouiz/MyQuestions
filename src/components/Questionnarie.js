import React from 'react'
import QuestionWidget from '../components/questionnarie/QuestionWidget.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'
import AddQuestions from '../containers/questions/AddQuestions.js'
import { saveQuestionnarie } from '../actions'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"


class Questionnarie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: shortid.generate(),
            title: undefined,
            description: undefined,
            is_saved: false
        }
    }

    saveQuestionnarie() {
        console.log("SAVE QUESTIONNARIE");
        this.props.saveQuestionnarie(
            this.state.id,
            this.state.title,
            this.state.description,
            this.props.questions
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
                </div> 
                <AddQuestions />
                <ul style={{listStyle: "decimal"}}>
                    {this.props.questions.map((question) => {
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


const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = (dispatch) => ({
  saveQuestionnarie: (id, title, description, questions) => {
        dispatch(saveQuestionnarie(id, title, description, questions))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Questionnarie);