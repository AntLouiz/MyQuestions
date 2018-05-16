import shortid from 'shortid'

const QuestionsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONNARIES':
      return action.payload

    case 'SAVE_QUESTIONNARIE':
      return Object.assign(state, state)

    default:
      return []
  }
}

export default QuestionsReducer