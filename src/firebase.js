import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBgInlJCSTgoRsQX1czoxH8igGoG84bLQ",
    authDomain: "todoapp-b3e03.firebaseapp.com",
    projectId: "todoapp-b3e03",
    storageBucket: "todoapp-b3e03.appspot.com",
    messagingSenderId: "956313985338",
    appId: "1:956313985338:web:78dd5a14af4c6336cd7003",
    measurementId: "G-GE2FED6NTD"
  };

const firebaseApp = firebase.initilizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;