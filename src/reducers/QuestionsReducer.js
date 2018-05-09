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
        }
      });

      return [
        ...state
      ]

    case 'REMOVE_QUESTION':
      return state.filter((question) => {
          return question.id !== action.id
        })

    case 'ADD_ANSWER':
      state.map((question) => {
        if(question.id === action.question_id)
          console.log(question)
          question.answers.push({
            id: action.id,
            question_id: action.question_id,
            description: action.description,
            answer_type: action.answer_type,
            value: action.value
          })
      });
      return [
        ...state
      ]

    case 'EDIT_ANSWER':
      state.map((question) => {
        if(question.id === action.question_id){
          question.answers.map((answer) => {
            if(answer.id === action.id)
              answer.description = action.description;
            return answer;
          })
        return question;
        }
      });
      return [
        ...state
      ]

    default:
      return [empty_question]
  }
}

export default QuestionsReducer