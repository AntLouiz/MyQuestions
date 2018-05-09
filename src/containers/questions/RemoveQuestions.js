import React from 'react'
import { connect } from 'react-redux'
import { removeQuestion, editQuestion } from '../../actions'
import QuestionWidget from '../../components/questionnarie/QuestionWidget.js'

const mapDispatchToProps = (dispatch) => ({
  removeQuestion: (id) => dispatch(removeQuestion(id)),
  editQuestion: (id, description) => dispatch(editQuestion(id, description))
})

export default connect(null, mapDispatchToProps)(QuestionWidget);