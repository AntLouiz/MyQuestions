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
            is_created: false,
            questionnaire_link: null
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.questionnaire){
            let questionnaire = newProps.questionnaire;
            /**
            this.props.history.push(
                `/questionnaire/detail/${questionnaire.key}/${questionnaire.id}`
            )
            **/
            this.setState({
                is_created: true, 
                questionnaire_link: `/questionnaire/detail/${questionnaire.key}/${questionnaire.id}`
            })
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
    }

    createNewQuestionnaire() {
        this.setState({is_created: false})
    }

    render() {
        return (
                <div>
                    <div className="container">
                        <div className="modal is-active">
                        <div className="modal-background"></div>
                            <div className="modal-content">
                                  <div className="modal-card">
                                    <header className="modal-card-head">
                                      <p className="modal-card-title">Create a new questionnaire</p>
                                    </header>
                                    <section className="modal-card-body">
                                        <Choose>
                                        <When condition={!this.state.is_created}>
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
                                        </When>
                                        <When condition={this.state.is_created}>
                                              <div class="notification is-success">
                                                <button class="delete"></button>
                                                Questionnaire <strong>{this.props.questionnaire.title}</strong>  
                                                created successfully!
                                                <p>
                                                    <Link to={this.state.questionnaire_link}>
                                                        Check Now
                                                    </Link>
                                                </p>
                                              </div>
                                        </When>
                                        <Otherwise>
                                            Creating...
                                        </Otherwise>
                                        </Choose>
                                    </section>
                                    <footer className="modal-card-foot">
                                        <Choose>
                                            <When condition={!this.state.is_created}>
                                              <button className="button is-success"
                                                onClick={this.createQuestionnaire.bind(this)}
                                              >
                                                Create
                                              </button>
                                            </When>
                                            <When condition={this.state.is_created}>
                                              <button className="button is-success"
                                                onClick={this.createNewQuestionnaire.bind(this)}
                                              >
                                                Create new
                                              </button>
                                            </When>
                                            <Otherwise>
                                              <button className="button is-info">
                                                Creating...
                                              </button>
                                            </Otherwise>
                                        </Choose>
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
}


const mapStateToProps = (state) => {
    return {
        questionnaire: state.questionnaire.data,
        is_loading: state.questionnaire.is_loading
    }
}

const mapDispatchToProps = (dispatch) => ({
  createQuestionnaire: (questionnaire) => {
    dispatch(saveQuestionnaire(questionnaire))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)