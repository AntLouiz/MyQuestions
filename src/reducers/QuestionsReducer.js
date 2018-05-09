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
    case 'EDIT_QUESTION':
      state.map((question) => {
        if(question.id === action.id){
          question.description = action.description;
          console.log(question.id, action.id)
        }
      });

      return [
        ...state
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