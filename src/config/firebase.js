import * as firebase from 'firebase';

import { FirebaseConfig } from "../config/keys";

firebase.initializeApp(FirebaseConfig);

export const database = firebase.database();
export const questionnariesRef = database.ref().child("questionnaries");