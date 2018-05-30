import {
  FETCH_QUESTIONNAIRES,
  FETCH_QUESTIONNAIRE_BY_KEY,
  SAVE_QUESTIONNAIRE,
  UPDATE_QUESTIONNAIRE,
  ARCHIVE_QUESTIONNAIRE,
  RESTORE_QUESTIONNAIRE
} from '../actions/types.js'

const QuestionnaireReducer = (state, action) => {
  switch (action.type) {
    case FETCH_QUESTIONNAIRES:
      return {
        data: action.payload,
        is_loading: false
      }

    case FETCH_QUESTIONNAIRE_BY_KEY:
        return {
          data: action.payload,
          is_loading: false
        }

    case SAVE_QUESTIONNAIRE:
      return {
        data: action.payload,
        is_loading: true
      }

    case UPDATE_QUESTIONNAIRE:
      return { 
        data: action.payload, 
        is_loading: false
      }

    case ARCHIVE_QUESTIONNAIRE:
      return { 
        data: action.payload, 
        is_loading: false
      }

    case RESTORE_QUESTIONNAIRE:
      return { 
        data: action.payload, 
        is_loading: false
      }

    default:
      return {
        data: null,
        is_loading: true
      }
  }
}

export default QuestionnaireReducer