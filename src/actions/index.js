import { database, questionnaireRef } from '../config/firebase.js'

export const fetchQuestionnaire = () => async dispatch => {
  questionnaireRef.on("value", (snapshot) => {
    let payload = snapshot.val();

    if(!payload)
      payload = null;
    else{
      payload = {};
      snapshot.forEach((data) => {
        if(data.val().is_active){
          payload[data.key] = data.val();
        }
      });
    }

    dispatch({
      type: 'FETCH_QUESTIONNAIRES',
      payload: payload
    })
  })
}

export const fetchQuestionnaireByKey = (questionnaire_key) => async dispatch => {
  questionnaireRef.on("value", (snapshot) => {
    let payload = snapshot.val();
    if(payload){
      payload = payload[questionnaire_key];
    }
    else
      payload = null;

    dispatch({
      type: 'FETCH_QUESTIONNAIRE_BY_KEY',
      payload: payload
    })
  })
}

export const saveQuestionnaire = (new_questionnaire) => async dispatch => {
  if(!new_questionnaire.title)
    new_questionnaire.title = `Questionnaire-${new_questionnaire.id}`

  let key = questionnaireRef.push().key;

  new_questionnaire.key = key;

  questionnaireRef.child(key).set({
    id: new_questionnaire.id,
    title: new_questionnaire.title,
    description: new_questionnaire.description,
    questions: new_questionnaire.questions,
    is_active: true
  });

  dispatch({
    type: 'SAVE_QUESTIONNAIRE',
    payload: new_questionnaire
  });
}

export const updateQuestionnaire = (questionnaire) => async dispatch => {
  questionnaireRef.child(questionnaire.id).update({
    title: questionnaire.title,
    description: questionnaire.description,
    questions: questionnaire.questions
  })
  dispatch({
    type: 'UPDATE_QUESTIONNAIRE',
    payload: questionnaire
  });
}