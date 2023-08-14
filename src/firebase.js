// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzW8mHEq58OKpcDxIbM8CpcGrYdxr5ncw",
  authDomain: "portfolio-2e54c.firebaseapp.com",
  projectId: "portfolio-2e54c",
  storageBucket: "portfolio-2e54c.appspot.com",
  messagingSenderId: "654110818304",
  appId: "1:654110818304:web:68e8d071c90d6473cc58e5",
  measurementId: "G-3RPFS70NFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)