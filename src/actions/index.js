import { database, questionnariesRef } from '../config/firebase.js'

export const fetchQuestionnaries = () => async dispatch => {
  questionnariesRef.on("value", (snapshot) => {
    let payload = snapshot.val();

    if(!payload)
      payload = null;

    dispatch({
      type: 'FETCH_QUESTIONNARIES',
      payload: payload
    })
  })
}

export const fetchQuestionnarieByKey = (questionnarie_key) => async dispatch => {
  questionnariesRef.on("value", (snapshot) => {
    let payload = snapshot.val();
    if(payload){
      payload = payload[questionnarie_key];
    }
    else
      payload = null;

    dispatch({
      type: 'FETCH_QUESTIONNARIE_BY_ID',
      payload: payload
    })
  })
}

export const saveQuestionnarie = (new_questionnarie) => async dispatch => {
  if(!new_questionnarie.title)
    new_questionnarie.title = `Questionnarie-${new_questionnarie.id}`

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

export const updateQuestionnarie = (questionnarie) => async dispatch => {
  questionnariesRef.child(questionnarie.id).update(questionnarie)
  dispatch({
    type: 'UPDATE_QUESTIONNARIE',
    payload: questionnarie
  });
}