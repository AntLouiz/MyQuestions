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
            is_loading: true
        }
    }

    componentWillReceiveProps(nextProps) {
        let { is_loading } = nextProps
        this.setState({ is_loading })
    }

    componentDidMount() {
        this.props.fetchQuestionnaireByKey(this.state.questionnaire_key);
    }

    render() {
        if(this.props.is_loading)
            return (<div>loading...</div>)
        else if(this.props.data){
            return (
                <div>
                    <Questionnaire
                        id={this.state.questionnaire_id}
                        _key={this.state.questionnaire_key}
                        title={this.props.data.title}
                        description={this.props.data.description}
                        options={this.props.data.options}
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