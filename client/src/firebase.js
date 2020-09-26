// src/firebaseConfig.js
import firebase from "firebase/app";
import 'firebase/functions';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoW2zmku9XLeWP_stjWpG678nj4vl1nS4",
    authDomain: "kollektivshopping.firebaseapp.com",
    databaseURL: "https://kollektivshopping.firebaseio.com",
    projectId: "kollektivshopping",
    storageBucket: "kollektivshopping.appspot.com",
    messagingSenderId: "675896284380",
    appId: "1:675896284380:web:d32e66d3efc2671b1f5019",
    measurementId: "G-FDDFF2SWWM"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig).functions('europe-west2');