// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHQz6Gvfqih3rkxoUy3oQIArGk1zx30sE",
  authDomain: "clone-dee8a.firebaseapp.com",
  projectId: "clone-dee8a",
  storageBucket: "clone-dee8a.appspot.com",
  messagingSenderId: "815843863581",
  appId: "1:815843863581:web:db5706d4b395d561d8aaf4",
  measurementId: "G-M1QZTJJTCX",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
