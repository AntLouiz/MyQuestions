import React from 'react'
import { connect } from 'react-redux'
import { removeQuestion } from '../actions'
import QuestionWidget from '../components/questionnarie/QuestionWidget.js'

const mapDispatchToProps = (dispatch) => ({
  removeQuestion: (id) => dispatch(removeQuestion(id))
})

export default connect(mapDispatchToProps)(QuestionWidget);