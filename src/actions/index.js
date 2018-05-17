import { questionnariesRef } from '../config/firebase.js'

export const fetchQuestionnaries = () => async dispatch => {
  questionnariesRef.on("value", (snapshot) => {
    let payload = snapshot.val();

    if(payload)
      payload = Object.values(payload);
    else
      payload = [];

    dispatch({
      type: 'FETCH_QUESTIONNARIES',
      payload: payload
    })
  })
}

export const fetchQuestionnarieById = (questionnarie_id) => async dispatch => {
  questionnariesRef.on("value", (snapshot) => {
    let payload = snapshot.val();
    if(payload){
      payload = Object.values(payload);
      payload = payload.filter((questionnarie) => {
        return questionnarie.id === questionnarie_id;
      })[0]
    }
    else
      payload = [];

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