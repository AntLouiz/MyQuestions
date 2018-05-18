import React from 'react'
import { connect, dispatch } from 'react-redux'
import { fetchQuestionnaries } from '../actions'
import Questionnarie from '../components/Questionnarie.js'
import { Link } from 'react-router-dom'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionnaries: this.props.questionnaries,
            is_loading: this.props.is_loading
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            questionnaries: nextProps.questionnaries,
            is_loading: nextProps.is_loading
        })
    }

    componentWillMount() {
        this.props.fetchQuestionnaries();
    }

    render() {
        if(!!this.state.questionnaries){
            return (
                <ul className="containner is-flex">
                    <div className="column is-5 is-offset-3">
                    {Object.keys(this.state.questionnaries).map((key) => {
                        let id = this.state.questionnaries[key].id;
                        let title = this.state.questionnaries[key].title;

                        return (
                            <li key={key}>
                            <div className="column is-12">
                                <Link className="card" to={`/questionnarie/detail/${key}/${id}`}>
                                      <header class="card-header has-background-info">
                                        <p class="card-header-title">
                                          {title}
                                        </p>
                                        <a href="#" class="card-header-icon" aria-label="more options">
                                          <span class="icon">
                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                          </span>
                                        </a>
                                      </header>
                                </Link>
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
            return <div>Not found questionnaries</div>
    }
}

const mapStateToProps = (state) => {
    return {
        questionnaries: state.questionnaries.data,
        is_loading: state.questionnaries.is_loading
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionnaries: () => {
    dispatch(fetchQuestionnaries())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)