import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestionnaries } from '../actions'
import Questionnarie from '../components/Questionnarie.js'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchQuestionnaries();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.questionnaries.map((questionnarie) => {
                        return <li>{questionnarie.title}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    questionnaries: state.questionnarie
})

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionnaries: () => {
    dispatch(fetchQuestionnaries())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)