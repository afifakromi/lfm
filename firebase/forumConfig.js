import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD6zZW-TgkbFzw9NWSjyXZeziiQ0CNzvGY",
    authDomain: "forum-ganffest.firebaseapp.com",
    projectId: "forum-ganffest",
    storageBucket: "forum-ganffest.appspot.com",
    messagingSenderId: "353632376731",
    appId: "1:353632376731:web:e911b4622d8ee0a88f333e",
    measurementId: "G-RGYGQKQR3H",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

export const forum_db = firebase.firestore();
