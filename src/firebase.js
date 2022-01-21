// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAIDokL3BSunEuLqT0f3vfw0tRopOJtRmk",
  authDomain: "clone1-6f38e.firebaseapp.com",
  projectId: "clone1-6f38e",
  storageBucket: "clone1-6f38e.appspot.com",
  messagingSenderId: "457918826511",
  appId: "1:457918826511:web:26cba219b892b7b4f03b7a",
  measurementId: "G-6B736YQQQ8"

};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
