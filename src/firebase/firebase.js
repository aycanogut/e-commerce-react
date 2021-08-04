import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQS8aXH7cmW-dlgrXZBhJOVWE7QfDGs_c",
  authDomain: "e-commerce-18eb2.firebaseapp.com",
  projectId: "e-commerce-18eb2",
  storageBucket: "e-commerce-18eb2.appspot.com",
  messagingSenderId: "916766661909",
  appId: "1:916766661909:web:60fa8aac598c93f88a1d1c",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
