import shortid from 'shortid'

export const saveQuestionnarie = (id, title, description, questions) => ({
  type: 'SAVE_QUESTIONNARIE',
  id: id,
  title: title,
  description: description,
  questions: questions
})

export const addQuestion = (questionnarie_id) => ({
  type: 'ADD_QUESTION',
  id: shortid.generate(),
  description: undefined,
  answers: [],
  questionnarie_id: questionnarie_id
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


export const addAnswer = (id, answer_type, question_id) => ({
  type: 'ADD_ANSWER',
  id: id,
  description: undefined,
  answer_type: answer_type,
  question_id: question_id,
  value: undefined
})

export const saveAnswer = (id, description, question_id) => ({
  type: 'SAVE_ANSWER',
  id: id,
  description: description,
  question_id: question_id,
})

export const removeAnswer = (id, question_id) => ({
  type: 'REMOVE_ANSWER',
  id: id,
  question_id: question_id,
})