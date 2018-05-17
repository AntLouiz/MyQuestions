import React from 'react'
import shortid from 'shortid'
import Questionnarie from '../components/Questionnarie.js'
import { connect } from 'react-redux'
import { fetchQuestionnarieById } from '../actions'
import { Redirect } from "react-router-dom"

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionnarie_id: props.match.params.id,
            questionnarie_key: props.match.params.key
        }
    }

    componentWillMount() {
        this.props.fetchQuestionnarieById(this.state.questionnarie_id);
    }

    render() {
        if(this.props.is_loading)
            return (<div>loading...</div>)
        else if(this.props.data){
            return (
                <div>
                    <Questionnarie
                        id={this.props.data.id}
                        title={this.props.data.title}
                        description={this.props.data.description}
                        questions={this.props.data.questions}
                        is_saved={true}
                    />
                </div>
            );
        }
        else
            return <Redirect to="/list/questionnaries"/>
    }
}

const mapStateToProps = (state) => ({
    data: state.questionnaries.data,
    is_loading: state.questionnaries.is_loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchQuestionnarieById: (questionnarie_id) => {
        dispatch(fetchQuestionnarieById(questionnarie_id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)