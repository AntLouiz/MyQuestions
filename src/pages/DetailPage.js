import React from 'react'
import shortid from 'shortid'
import Questionnarie from '../components/Questionnarie.js'
import { connect } from 'react-redux'
import { fetchQuestionnarieByKey } from '../actions'
import { Redirect } from "react-router-dom"

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionnarie_id: props.match.params.id,
            questionnarie_key: props.match.params.key,
            data: props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({data: nextProps.data})
    }

    componentWillMount() {
        this.props.fetchQuestionnarieByKey(this.state.questionnarie_key);
    }

    render() {
        if(this.props.is_loading)
            return (<div>loading...</div>)
        else if(this.props.data){
            return (
                <div>
                    <Questionnarie
                        id={this.state.questionnarie_key}
                        title={this.state.data.title}
                        description={this.state.data.description}
                        questions={this.state.data.questions}
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
    fetchQuestionnarieByKey: (questionnarie_key) => {
        dispatch(fetchQuestionnarieByKey(questionnarie_key));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)