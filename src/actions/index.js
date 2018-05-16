import shortid from 'shortid'
import { questionnariesRef } from '../config/firebase.js'

export const fetchQuestionnaries = () => async dispatch => {
  questionnariesRef.on("value", (snapshot) => {
    dispatch({
      type: 'FETCH_QUESTIONNARIES',
      payload: snapshot.val()
    })
  })
}

export const saveQuestionnarie = (new_questionnarie) => async dispatch => {
  questionnariesRef.push().set({
    id: new_questionnarie.id,
    title: new_questionnarie.title,
    description: new_questionnarie.description,
    questions: new_questionnarie.questions
  });
  dispatch({
    type: 'SAVE_QUESTIONNARIE',
  });
}

export const editQuestionnarie = (title, description) => ({
  type: 'EDIT_QUESTIONNARIE',
  title: title,
  description: description
})

export const addQuestion = (questionnarie_id) => ({
  type: 'ADD_QUESTION',
  id: shortid.generate(),
  description: null,
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
  description: null,
  answer_type: answer_type,
  question_id: question_id,
  value: null
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