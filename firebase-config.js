import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const config = {
  apiKey: "API_KEY",
  authDomain: "universitiers-c8b7c.firebaseapp.com",
  projectId: "universitiers-c8b7c",
  storageBucket: "universitiers-c8b7c.appspot.com",
  messagingSenderId: "636532433360",
  appId: "1:636532433360:web:0b317dabe15118404399d5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore; 
export const st = firebase.storage
