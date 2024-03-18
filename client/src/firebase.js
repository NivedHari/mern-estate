// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f7360.firebaseapp.com",
  projectId: "mern-estate-f7360",
  storageBucket: "mern-estate-f7360.appspot.com",
  messagingSenderId: "670287795829",
  appId: "1:670287795829:web:119cab4218cc36df840a3c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);