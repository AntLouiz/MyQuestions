import React from 'react'
import { connect, dispatch } from 'react-redux'
import { fetchQuestionnaries } from '../actions'
import Questionnarie from '../components/Questionnarie.js'
import { startFetch } from '../actions/fetch.js'
import { Link } from 'react-router-dom'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.startFetch();
        this.props.fetchQuestionnaries();
    }

    render() {
        const Questionnaries = (props) => {
            if(this.props.is_loading){
                return (
                    <span>Loading...</span>
                );
            }
            else if(!this.props.questionnaries.length)
                return (<div>Questionnaries not found</div>);
            else{
                return (
                    <ul>
                        {this.props.questionnaries.map((questionnarie) => {
                            return  <li key={questionnarie.id}>
                                        <Link to={`/detail/${questionnarie.id}`}>
                                            {questionnarie.title}
                                        </Link>
                                    </li>
                        })}
                    </ul>
                );
            }
        }

        return (
            <div>
                <Questionnaries questionnaries={this.props.questionnaries} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.questionnarie)
    return {
        questionnaries: state.questionnarie,
        is_loading: state.is_loading
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionnaries: () => {
    dispatch(fetchQuestionnaries())
  },
  startFetch: () => {
    dispatch(startFetch())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)