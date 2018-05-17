import { combineReducers } from 'redux'
import QuestionnarieReducer from './QuestionnarieReducer.js'


export default combineReducers({
  questionnaries: QuestionnarieReducer,
})