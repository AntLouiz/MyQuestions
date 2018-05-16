import shortid from 'shortid'
import { questionnariesRef } from '../config/firebase.js'

export const fetchQuestionnaries = () => async dispatch => {
  questionnariesRef.on("value", (snapshot) => {
    dispatch({
      type: 'FETCH_QUESTIONNARIES',
      payload: Object.values(snapshot.val())
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