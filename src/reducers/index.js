import { combineReducers } from 'redux'
import QuestionsReducer from './QuestionsReducer.js'


export default combineReducers({
  questions: QuestionsReducer
})