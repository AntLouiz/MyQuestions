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
    default:
      return state
  }
}

export default QuestionsReducer