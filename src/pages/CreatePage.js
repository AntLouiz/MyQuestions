import React from 'react'
import shortid from 'shortid'
import { connect, dispatch } from 'react-redux'
import { saveQuestionnaire } from '../actions'
import { Link } from 'react-router-dom'

class CreatePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            questionnaire: null,
            is_saved: false
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.questionnaire){
            let questionnaire = newProps.questionnaire;
            this.props.history.push(
                `/questionnaire/detail/${questionnaire.key}/${questionnaire.id}`
            )
        }
    }

    createQuestionnaire() {
        let empty_questionnaire = {
            id: shortid.generate(),
            title: this.state.title,
            description: "",
            questions: []
        }
        this.props.createQuestionnaire(empty_questionnaire)
        this.setState({is_saved: true})
    }

    render() {
        if(!this.state.is_saved){
        return (
                <div>
                    <h2>
                        Create Questions
                    </h2>
                    <div className="container">
                        <div className="modal is-active">
                        <div className="modal-background"></div>
                            <div className="modal-content">
                                  <div className="modal-card">
                                    <header className="modal-card-head">
                                      <p className="modal-card-title">Create a new questionnaire</p>
                                    </header>
                                    <section className="modal-card-body">
                                      <div>
                                        <label to="input_title">
                                            <h2>Title:</h2>
                                        </label>
                                        <input 
                                            className="input is-primary" 
                                            name="input_title" 
                                            type="text"
                                            ref="input"
                                            onKeyUp={
                                                (e) => this.setState({'title': e.target.value})
                                            }
                                        />
                                      </div>
                                    </section>
                                    <footer className="modal-card-foot">
                                      <button className="button is-success"
                                        onClick={this.createQuestionnaire.bind(this)}
                                      >Create</button>
                                    <Link to="/" className="button">
                                        Cancel
                                    </Link>
                                    </footer>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
    else{
        return (
            <div>Loading...</div>
        )
    }
    }
}


const mapStateToProps = (state) => {
    return {
        questionnaire: state.questionnaire.data
    }
}

const mapDispatchToProps = (dispatch) => ({
  createQuestionnaire: (questionnaire) => {
    dispatch(saveQuestionnaire(questionnaire))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)