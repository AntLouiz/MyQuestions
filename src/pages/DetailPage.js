import React from 'react'
import shortid from 'shortid'
import Questionnaire from '../components/Questionnaire.js'
import { connect } from 'react-redux'
import { fetchQuestionnaireByKey } from '../actions'
import { Redirect } from "react-router-dom"

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionnaire_id: props.match.params.id,
            questionnaire_key: props.match.params.key,
            is_loading: true,
            data: props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            data: nextProps.data[this.state.questionnaire_key], 
            is_loading: nextProps.is_loading
        })
    }

    componentWillMount() {
        this.props.fetchQuestionnaireByKey(this.state.questionnaire_key);
    }

    render() {
        if(this.state.is_loading)
            return (<div>loading...</div>)
        else if(this.props.data){
            return (
                <div>
                    <Questionnaire
                        id={this.state.questionnaire_id}
                        _key={this.state.questionnaire_key}
                        title={this.state.data.title}
                        description={this.state.data.description}
                        questions={this.state.data.questions}
                        is_saved={true}
                    />
                </div>
            );
        }
        else
            return <Redirect to="/list/questionnaires"/>
    }
}

const mapStateToProps = (state) => ({
    data: state.questionnaire.data,
    is_loading: state.questionnaire.is_loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchQuestionnaireByKey: (questionnaire_key) => {
        dispatch(fetchQuestionnaireByKey(questionnaire_key));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)