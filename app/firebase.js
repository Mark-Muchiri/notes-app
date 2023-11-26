/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getAnalytics } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5q5doBCS2UQvKSWcKUajoZ6E-h6Smae4",
    authDomain: "notes-app-8b664.firebaseapp.com",
    projectId: "notes-app-8b664",
    storageBucket: "notes-app-8b664.appspot.com",
    messagingSenderId: "158127617490",
    appId: "1:158127617490:web:3e331cb58355db5d42440b",
    measurementId: "G-4FP6E8M498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// INFO: an instance of my database
export const db = getFirestore(app);
// Access to the notes collection
export const notesCollection = collection(db, 'notes');
// analytics
const analytics = getAnalytics(app);
