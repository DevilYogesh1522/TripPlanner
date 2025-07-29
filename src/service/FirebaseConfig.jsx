// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_Firebase_key,
  authDomain: "tripplanner-1bf50.firebaseapp.com",
  projectId: "tripplanner-1bf50",
  storageBucket: "tripplanner-1bf50.firebasestorage.app",
  messagingSenderId: "938846405683",
  appId: "1:938846405683:web:bf3b4d9a01e3aa6f54cf46",
  measurementId: "G-7G5FMZKS98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db=getFirestore(app);      

// const analytics = getAnalytics(app);