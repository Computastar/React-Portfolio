//import firebase from "firebase";
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDxTCCiQpStNyIw0CyhfoDq6wTDGTps8hs",
  authDomain: "emailverify-bf17f.firebaseapp.com",
  projectId: "emailverify-bf17f",
  storageBucket: "emailverify-bf17f.appspot.com",
  messagingSenderId: "28392592096",
  appId: "1:28392592096:web:b6ce72ccf3ed47e7def685"
};

// firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth();

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
