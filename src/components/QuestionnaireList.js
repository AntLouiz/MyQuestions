import React from 'react'
import { connect, dispatch } from 'react-redux'
import { fetchQuestionnaire } from '../actions'
import Questionnaire from './Questionnaire.js'
import QuestionnaireCard from './questionnaire_list/QuestionnaireCard.js'
import { Link, Redirect } from 'react-router-dom'

class QuestionnaireList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionnaires: this.props.questionnaires,
            is_loading: this.props.is_loading,
            search_actives: this.props.search_actives
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            questionnaires: nextProps.questionnaires,
            is_loading: nextProps.is_loading
        })
    }

    componentWillMount() {
        this.props.fetchQuestionnaire(this.state.search_actives);
    }

    render() {
        return (
        <div>
            <If condition={this.state.questionnaires.is_compound}>
                <Redirect 
                    to={`/questionnaire/detail/${this.state.questionnaires.key}/${this.state.questionnaires.id}`} 
                />
            </If>
            <Choose>
                <When condition={!!this.state.questionnaires}>
                    <ul className="containner is-flex">
                        <div className="column is-5 is-offset-3">
                            {Object.keys(this.state.questionnaires).map((key) => {
                                let id = this.state.questionnaires[key].id;
                                let title = this.state.questionnaires[key].title;
                                let is_active = this.state.questionnaires[key].is_active;

                                return (
                                    <li key={key}>
                                        <QuestionnaireCard 
                                            id={id}
                                            _key={key}
                                            title={title}
                                            is_active={is_active}
                                        />
                                    </li>
                                );
                            })}
                        </div>
                    </ul>
                </When>
                <When condition={this.state.is_loading}>
                    <span>Loading...</span>
                </When>
                <Otherwise>
                    <span>Not found questionnaires</span>
                </Otherwise>
            </Choose>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questionnaires: state.questionnaire.data,
        is_loading: state.questionnaire.is_loading
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionnaire: (search_actives) => {
    dispatch(fetchQuestionnaire(search_actives))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireList)