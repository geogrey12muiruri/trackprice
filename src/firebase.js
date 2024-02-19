// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "commodity-tracker-bb006.firebaseapp.com",
  projectId: "commodity-tracker-bb006",
  storageBucket: "commodity-tracker-bb006.appspot.com",
  messagingSenderId: "518026483247",
  appId: "1:518026483247:web:6b19c14357067856ee98da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);