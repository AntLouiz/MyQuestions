const QuestionnarieReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONNARIES':
      return {
        data: action.payload,
        is_loading: false
      }

    case 'FETCH_QUESTIONNARIE_BY_ID':
        return {
          data: action.payload,
          is_loading: false
        }

    case 'SAVE_QUESTIONNARIE':
      return {
        questionnarie: action.payload,
        is_loading: true
      }

    case 'UPDATE_QUESTIONNARIE':
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

export default QuestionnarieReducer