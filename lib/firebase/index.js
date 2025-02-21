// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw2cVGHVZL5SM5pZo-A36jIAN_Bq6kew0",
  authDomain: "famaart-3ba45.firebaseapp.com",
  projectId: "famaart-3ba45",
  storageBucket: "famaart-3ba45.firebasestorage.app",
  messagingSenderId: "621614045496",
  appId: "1:621614045496:web:26bd2086dee3a073fe09cd",
  measurementId: "G-M2V7CZBRM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);