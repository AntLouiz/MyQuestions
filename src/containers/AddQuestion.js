import React from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'


const AddQuestion = ({dispatch}) => {
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

export default connect()(AddQuestion);