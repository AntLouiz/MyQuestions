import shortid from 'shortid'

export const addQuestion = () => ({
  type: 'ADD_QUESTION',
  id: shortid.generate(),
  description: undefined,
  answers: []
})

export const removeQuestion = (id) => ({
  type: 'REMOVE_QUESTION',
  id: id,
})