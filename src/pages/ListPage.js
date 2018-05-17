import React from 'react'
import { connect, dispatch } from 'react-redux'
import { fetchQuestionnaries } from '../actions'
import Questionnarie from '../components/Questionnarie.js'
import { Link } from 'react-router-dom'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentWillMount() {
        this.props.fetchQuestionnaries();
    }

    render() {
        if(this.props.questionnaries.length){
            return (<ul>
                    {this.props.questionnaries.map((questionnarie) => {
                        return (
                            <li key={questionnarie.id}>
                                <Link to={`/detail/${questionnarie.id}`}>
                                    {questionnarie.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>);
        }
        else if(this.props.is_loading)
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