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
      return Object.assign(state, state)

    default:
      return {
        data: null,
        is_loading: true
      }
  }
}

export default QuestionnarieReducer