import shortid from 'shortid'

let empty_questionnarie = {
  id: shortid.generate(),
  title: undefined,
  description: undefined,
  questions: []
}

const QuestionsReducer = (state = empty_questionnarie, action) => {
  switch (action.type) {
    case 'SAVE_QUESTIONNARIE':
      // save on the firebase
      console.log(action)

      return []

    case 'EDIT_QUESTIONNARIE':
      return Object.assign({}, state, (
          state.title = action.title,
          state.description = action.description
        ));

    case 'ADD_QUESTION':
      state.questions.push({
        id: action.id,
        description: action.description,
        answers: action.answers,
        questionnarie_id: action.questionnarie_id
      });
      return Object.assign(state, state);

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
        if(question.id === action.question_id){
          question.answers.push({
            id: action.id,
            question_id: action.question_id,
            description: action.description,
            answer_type: action.answer_type,
            value: action.value
          })
        }
      });
      return [
        ...state
      ]

    case 'SAVE_ANSWER':
      state.map((question) => {
        if(question.id === action.question_id){
          question.answers.map((answer) => {
            if(answer.id === action.id){
              answer.description = action.description;
            }
          })
        }
      });
      return [
        ...state
      ]

    case 'REMOVE_ANSWER':
      state.map((question) => {
        if(question.id === action.question_id){
          question.answers = question.answers.filter((answer)=>{
            return answer.id !== action.id
          })
        }
        return question
      })

      return [
        ...state
      ]

    default:
      return state
  }
}

export default QuestionsReducer