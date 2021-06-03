import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDG0-Qa4rF7C_zJA3L6ou2LiDoaDuY6GQA",
  authDomain: "clone-4b09a.firebaseapp.com",
  projectId: "clone-4b09a",
  storageBucket: "clone-4b09a.appspot.com",
  messagingSenderId: "496628314945",
  appId: "1:496628314945:web:14a7708c1afc7e5c7fa7c0",
  measurementId: "G-JN6SYBXK6F"
});

const auth = firebase.auth();

export { auth };