// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY_kPb2v9j-PstWMEbCLvoXt4gX21kcaY",
  authDomain: "tripplanner-1bf50.firebaseapp.com",
  projectId: "tripplanner-1bf50",
  storageBucket: "tripplanner-1bf50.firebasestorage.app",
  messagingSenderId: "938846405683",
  appId: "1:938846405683:web:bf3b4d9a01e3aa6f54cf46",
  measurementId: "G-7G5FMZKS98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);