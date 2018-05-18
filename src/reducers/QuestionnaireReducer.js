const QuestionnaireReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONNAIRES':
      return {
        data: action.payload,
        is_loading: false
      }

    case 'FETCH_QUESTIONNAIRE_BY_ID':
        return {
          data: action.payload,
          is_loading: false
        }

    case 'SAVE_QUESTIONNAIRE':
      return {
        questionnaire: action.payload,
        is_loading: true
      }

    case 'UPDATE_QUESTIONNAIRE':
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