import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { 
    archiveQuestionnaire 
} from '../../actions'

class QuestionnaireCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            _key: props._key,
            id: props.id
        }
    }

    archiveQuestionnaire(e) {
        e.preventDefault();

        this.props.archiveQuestionnaire(this.state._key, this.state.id)
    }

    render() {
        return (
            <div className="column is-12">
                <div className="card">
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
                                <a href="/" className="card-footer-item">
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
                                <a href="/" className="card-footer-item">
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
    }
})

export default connect(null, mapDispatchToProps)(QuestionnaireCard);