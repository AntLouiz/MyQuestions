const QuestionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          answers: action.answers
        }
      ]
    case 'REMOVE_QUESTION':
      return [
        state.filter((question) => {
          return question.id !== action.id
        })
      ]
    default:
      return state
  }
}

export default QuestionsReducer