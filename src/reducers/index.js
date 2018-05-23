import { combineReducers } from 'redux'
import QuestionnaireReducer from './QuestionnaireReducer.js'


export default combineReducers({
  questionnaire: QuestionnaireReducer,
})