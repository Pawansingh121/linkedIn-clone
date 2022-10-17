import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaXj2hnFAbwFSQoYWM9zMovxpq6Dd6Ax8",
  authDomain: "linkedin-c2a8a.firebaseapp.com",
  projectId: "linkedin-c2a8a",
  storageBucket: "linkedin-c2a8a.appspot.com",
  messagingSenderId: "838168391155",
  appId: "1:838168391155:web:24f370c2f30350d1a13686",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
