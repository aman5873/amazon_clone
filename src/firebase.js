import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA7ckqOQG0M2In5tTzjEkArfeS0sCZ-VxQ",
  authDomain: "project-5db03.firebaseapp.com",
  databaseURL: "https://project-5db03.firebaseio.com",
  projectId: "project-5db03",
  storageBucket: "project-5db03.appspot.com",
  messagingSenderId: "976806602585",
  appId: "1:976806602585:web:1bc520836d5113ca39ce48",
  measurementId: "G-QYEQPJDZWY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
