// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-54922.firebaseapp.com",
  projectId: "blog-54922",
  storageBucket: "blog-54922.appspot.com",
  messagingSenderId: "846457466803",
  appId: "1:846457466803:web:658cdbe3a6650e955765c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);