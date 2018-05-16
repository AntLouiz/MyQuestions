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
        const Questionnaries = (props) => {
            if(this.props.questionnaries.length){
                return (
                    <ul>
                        {this.props.questionnaries.map((questionnarie) => {
                            return  <li key={questionnarie.id}>
                                        <a href="#">{questionnarie.title}</a>
                                    </li>
                        })}
                    </ul>
                );
            }
            else
                return (<div>Questionnaries not found</div>);
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
        questionnaries: state.questionnarie
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionnaries: () => {
    dispatch(fetchQuestionnaries())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)