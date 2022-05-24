// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPM-krlB8TqvXqd-jBWqdai2NPxWCSi_M",
  authDomain: "quizified-app.firebaseapp.com",
  projectId: "quizified-app",
  storageBucket: "quizified-app.appspot.com",
  messagingSenderId: "312331495506",
  appId: "1:312331495506:web:e5cd2fedb50196952bd78b",
  measurementId: "G-Y8REP6KWLX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
