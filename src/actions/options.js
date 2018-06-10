import { database, questionnaireRef } from '../config/firebase.js'
import shortid from 'shortid'
import {
  UPDATE_QUESTIONNAIRE
} from './types.js'


export const addTextOption = (questionnaire_key) => async dispatch => {
    let text_option = {'type':'text'};
    let payload = null;
    let options = [];

    questionnaireRef.child(questionnaire_key).on('value', (snapshot) => {
        payload = snapshot.val();
        options = snapshot.val().options;
        
        if(options)
            options.push({'type': 'text'})
        else 
            options = [{'type':'text'}]
    })

    questionnaireRef.child(questionnaire_key).update({
        options: options
    })

    dispatch({
      type: UPDATE_QUESTIONNAIRE,
      payload: payload
    })
}