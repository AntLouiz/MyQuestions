import shortid from 'shortid'

export const addQuestion = () => ({
  type: 'ADD_QUESTION',
  id: shortid.generate(),
  description: undefined,
  answers: []
})

export const editQuestion = (id, description) => ({
  type: 'EDIT_QUESTION',
  id: id,
  description: description,
})

export const removeQuestion = (id) => ({
  type: 'REMOVE_QUESTION',
  id: id,
})