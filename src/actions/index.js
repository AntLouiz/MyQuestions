import { database, questionnaireRef } from '../config/firebase.js'
import {
  FETCH_QUESTIONNAIRES,
  FETCH_QUESTIONNAIRE_BY_KEY,
  SAVE_QUESTIONNAIRE,
  UPDATE_QUESTIONNAIRE,
  ARCHIVE_QUESTIONNAIRE
} from './types.js'

export const fetchQuestionnaire = (search_actives = true) => async dispatch => {
  questionnaireRef.on("value", (snapshot) => {
    let payload = snapshot.val();

    if(!payload)
      payload = null;
    else{
      payload = {};
      snapshot.forEach((data) => {
        if(data.val().is_active === search_actives){
          payload[data.key] = data.val();
        }
      });

      payload = Object.keys(payload).length ? payload : null;
    }

    dispatch({
      type: FETCH_QUESTIONNAIRES,
      payload: payload
    })
  })
}

export const fetchQuestionnaireByKey = (questionnaire_key) => async dispatch => {
  questionnaireRef.on("value", (snapshot) => {
    let payload = snapshot.val();
    if(!payload)
      payload = null;

    dispatch({
      type: FETCH_QUESTIONNAIRE_BY_KEY,
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
    type: SAVE_QUESTIONNAIRE,
    payload: new_questionnaire
  });
}

export const updateQuestionnaire = (questionnaire_key, questionnaire) => async dispatch => {
  questionnaireRef.child(questionnaire_key).update({
    title: questionnaire.title,
    description: questionnaire.description,
    questions: questionnaire.questions
  })

  let payload = {};
  payload[questionnaire_key] = questionnaire;

  dispatch({
    type: UPDATE_QUESTIONNAIRE,
    payload: payload
  });
}

export const archiveQuestionnaire = (questionnaire_key, questionnaire_id) => async dispatch => {
  questionnaireRef.child(questionnaire_key).update({
    is_active: false
  })

  questionnaireRef.on("value", (snapshot) => {
    let payload = null;

    if(snapshot.val()){
      payload = {}

      snapshot.forEach((data) => {
        if(data.key !== questionnaire_key && data.val().is_active)
          payload[data.key] = data.val();
      })

      if(!Object.keys(payload).length)
        payload = null
    }

    dispatch({
      type: ARCHIVE_QUESTIONNAIRE,
      payload: payload
    });
  })
}