import { combineReducers } from 'redux'
import QuestionnarieReducer from './QuestionnarieReducer.js'


const FetchReducer = (state, action) => {
    switch (action.type){
        case 'FETCH_START':
            console.log("STATING")
            return true

        case 'FETCH_CLOSE':
            return false

        default:
            return false
    }
}


export default combineReducers({
  questionnarie: QuestionnarieReducer,
  is_loading: FetchReducer
})