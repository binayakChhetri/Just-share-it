// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj9F-skrXLX-pVcSRN0FjNkChDz_7YM4Q",
  authDomain: "just-share-it-4d53a.firebaseapp.com",
  projectId: "just-share-it-4d53a",
  storageBucket: "just-share-it-4d53a.firebasestorage.app",
  messagingSenderId: "880741520410",
  appId: "1:880741520410:web:5dfae1187809b3e0cd6da3",
  measurementId: "G-CFVXE494T4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
