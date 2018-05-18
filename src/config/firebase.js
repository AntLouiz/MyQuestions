import * as firebase from 'firebase';

import { FirebaseConfig } from "../config/keys";

firebase.initializeApp(FirebaseConfig);

export const database = firebase.database();
export const questionnaireRef = database.ref().child("questionnaires");