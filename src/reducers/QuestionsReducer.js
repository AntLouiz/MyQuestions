import shortid from 'shortid'

const QuestionsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONNARIES':
      return action.payload

    case 'SAVE_QUESTIONNARIE':
      // save on the firebase
      return Object.assign(state, state)

    case 'EDIT_QUESTIONNARIE':
      state.title = action.title
      state.description = action.description

      return Object.assign({}, state);

    case 'ADD_QUESTION':
      state.questions.push({
        id: action.id,
        description: action.description,
        answers: action.answers,
        questionnarie_id: action.questionnarie_id
      })
      return Object.assign({}, state);

    case 'EDIT_QUESTION':

      return Object.assign({}, state, (
          state.questions.map((question) => {
            if(question.id === action.id){
              question.description = action.description;
            }
          })
        ))

    case 'REMOVE_QUESTION':
      return Object.assign({}, state, (
          state.questions = state.questions.filter((question) => {
            return question.id !== action.id
          })
        ))

    case 'ADD_ANSWER':
      return Object.assign({}, state, (
          state.questions.map((question) => {
            if(question.id === action.question_id){
              question.answers.push({
                id: action.id,
                question_id: action.question_id,
                description: action.description,
                answer_type: action.answer_type,
                value: action.value
              })
            }
          })
        ))

    case 'SAVE_ANSWER':
      return Object.assign({}, state, (
          state.questions.map((question) => {
            if(question.id === action.question_id){
              question.answers.map((answer) => {
                if(answer.id === action.id){
                  answer.description = action.description;
                }
              })
            }
          })
        ))

    case 'REMOVE_ANSWER':
      return Object.assign({}, state, (
          state.questions = state.questions.filter((question) => {
            if(question.id === action.question_id){
              question.answers = question.answers.filter((answer) => {
                return answer.id !== action.id
              })
            }
            return question.id === action.question_id
          })
        ))

    default:
      return []
  }
}

export default QuestionsReducer