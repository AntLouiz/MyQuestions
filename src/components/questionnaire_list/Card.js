import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { 
    archiveQuestionnaire,
    restoreQuestionnaire
} from '../../actions'
import CompoundModal from './questionnaire_card/CompoundModal.js'

class QuestionnaireCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            _key: props._key,
            id: props.id,
            title: props.title,
            modal_active : false
        }
    }

    archiveQuestionnaire(e) {
        e.preventDefault();

        this.props.archiveQuestionnaire(this.state._key, this.state.id)
    }


    showModal() {
        this.setState({modal_active: true})
    }

    hideModal() {
        this.setState({modal_active: false})
    }

    compoundQuestionnaire(e) {
        e.preventDefault();

        this.showModal();
    }

    restoreQuestionnaire(e) {
        e.preventDefault();

        this.props.restoreQuestionnaire(this.state._key, this.state.id)
    }

    render() {
        return (
            <div className="column is-12">
                <div className="card">
                    <If condition={this.state.modal_active}>
                        <CompoundModal 
                            {...this.state}
                            is_active = {this.state.modal_active}
                            hideModal = {this.hideModal.bind(this)}
                            handleCompound = {this.compoundQuestionnaire.bind(this)}
                        />
                    </If>
                    <Choose>
                        <When condition={this.props.is_active}>
                            <Link className="" to={`/questionnaire/detail/${this.props._key}/${this.props.id}`}>
                                <header className="card-header has-background-info">
                                    <p className="card-header-title">
                                        {this.props.title}
                                    </p>
                                </header>
                            </Link>
                            <footer className="card-footer">
                                <a 
                                    className="card-footer-item"
                                    onClick={this.compoundQuestionnaire.bind(this)}
                                >
                                    Compound
                                </a>
                                <a
                                    className="card-footer-item"
                                    onClick={this.archiveQuestionnaire.bind(this)}
                                >
                                    Archive
                                </a>
                            </footer>
                        </When>
                        <Otherwise>
                            <header className="card-header has-background-info">
                                <p className="card-header-title">
                                    {this.props.title}
                                </p>
                            </header>
                            <footer className="card-footer">
                                <a 
                                    className="card-footer-item"
                                    onClick={this.restoreQuestionnaire.bind(this)}
                                >
                                    Restore
                                </a>
                            </footer>
                        </Otherwise>
                    </Choose>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    archiveQuestionnaire: (questionnaire_key, questionnaire_id) => {
        dispatch(archiveQuestionnaire(questionnaire_key, questionnaire_id))
    },
    restoreQuestionnaire: (questionnaire_key, questionnaire_id) => {
        dispatch(restoreQuestionnaire(questionnaire_key, questionnaire_id))
    }
})

QuestionnaireCard.propTypes = {
    _key: PropTypes.string,
    id: PropTypes.integer,
    title: PropTypes.string,
    modal_active: PropTypes.bool
}

export default connect(null, mapDispatchToProps)(QuestionnaireCard);