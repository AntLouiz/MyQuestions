import React from 'react'
import { connect, dispatch } from 'react-redux'
import { fetchQuestionnaire } from '../../actions'
import Questionnaire from '../Questionnaire.js'
import { Link } from 'react-router-dom'

class Questionnaires extends React.Component {
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
        if(!!this.state.questionnaires){
            return (
                <ul className="containner is-flex">
                    <div className="column is-5 is-offset-3">
                    {Object.keys(this.state.questionnaires).map((key) => {
                        let id = this.state.questionnaires[key].id;
                        let title = this.state.questionnaires[key].title;

                        return (
                            <li key={key}>
                            <div className="column is-12">
                                <div className="card">
                                <Link className="" to={`/questionnaire/detail/${key}/${id}`}>
                                      <header class="card-header has-background-info">
                                        <p class="card-header-title">
                                          {title}
                                        </p>
                                      </header>
                                </Link>
                                <footer class="card-footer">
                                    <a href="/" class="card-footer-item">
                                        Compound
                                    </a>
                                    <a href="/" class="card-footer-item">
                                        Archive
                                    </a>
                                </footer>
                                </div>
                            </div>
                            </li>

                        )
                    })}
                    </div>
                </ul>);
        }
        else if(this.state.is_loading)
            return <div>Loading...</div>
        else
            return <div>Not found questionnaires</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires)