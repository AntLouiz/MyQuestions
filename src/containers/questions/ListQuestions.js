import React from 'react'
import { connect } from 'react-redux'
import Questionnarie from '../../components/Questionnarie.js'

const mapStateToProps = (state) => ({
  questions: state.questions
})

export default connect(mapStateToProps)(Questionnarie);