import React from 'react'
import shortid from 'shortid'
import { connect } from 'react-redux'
import { addQuestion } from '../../actions'


const AddQuestions = ({dispatch}) => {
    return (
        <div>
            <button 
                className="button is-success is-rounded"
                onClick={(e) => dispatch(addQuestion())}
            >
                Add question
            </button>
        </div>
    );
}

export default connect()(AddQuestions);