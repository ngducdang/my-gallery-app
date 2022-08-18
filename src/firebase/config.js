//import * as firebase from 'firebase/compat/app';
//import firebase from 'firebase/compat/app';
//import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
//import 'firebase/storage';
//import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjKc2x4d3rkU7rbKFzcoApo_0-q5hqzN4",
  authDomain: "gallery-28ea8.firebaseapp.com",
  projectId: "gallery-28ea8",
  storageBucket: "gallery-28ea8.appspot.com",
  messagingSenderId: "306990689272",
  appId: "1:306990689272:web:1d97006c983376475cc40d",
  measurementId: "G-ZF8Y9ND68S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp };
