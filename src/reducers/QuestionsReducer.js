import shortid from 'shortid'

let empty_question = {
  id: shortid.generate(),
  description: undefined,
  answers: []
}

const QuestionsReducer = (state, action) => {
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
      return state.filter((question) => {
          return question.id !== action.id
        })
    default:
      return [empty_question]
  }
}

export default QuestionsReducer