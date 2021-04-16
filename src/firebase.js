import firebase from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
    apiKey: "AIzaSyD9hSjlY6OcedTzl4YC1ImQyumXneTMPzg",
    authDomain: "fir-react-12354.firebaseapp.com",
    projectId: "fir-react-12354",
    storageBucket: "fir-react-12354.appspot.com",
    messagingSenderId: "449164814025",
    appId: "1:449164814025:web:cb6ee9319faf4102858f18"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();



export default firebase;