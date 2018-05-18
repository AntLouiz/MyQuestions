import React from 'react'
import { connect, dispatch } from 'react-redux'
import { fetchQuestionnaire } from '../../actions'
import Questionnaire from '../Questionnaire.js'
import { Link } from 'react-router-dom'

class Questionnaires extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionnaire: this.props.questionnaire,
            is_loading: this.props.is_loading,
            search_actives: this.props.search_actives
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            questionnaire: nextProps.questionnaire,
            is_loading: nextProps.is_loading
        })
    }

    componentWillMount() {
        this.props.fetchQuestionnaire(this.state.search_actives);
    }

    render() {
        if(!!this.state.questionnaire){
            return (
                <ul className="containner is-flex">
                    <div className="column is-5 is-offset-3">
                    {Object.keys(this.state.questionnaire).map((key) => {
                        let id = this.state.questionnaire[key].id;
                        let title = this.state.questionnaire[key].title;

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
            return <div>Not found questionnaire</div>
    }
}

const mapStateToProps = (state) => {
    return {
        questionnaire: state.questionnaire.data,
        is_loading: state.questionnaire.is_loading
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionnaire: (search_actives) => {
    dispatch(fetchQuestionnaire(search_actives))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires)