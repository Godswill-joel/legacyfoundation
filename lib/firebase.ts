// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR1w7ZD1XcmiHiWDi9AnEa_HuknjXtmiA",
  authDomain: "legacyfoundation-admin.firebaseapp.com",
  projectId: "legacyfoundation-admin",
  storageBucket: "legacyfoundation-admin.firebasestorage.app",
  messagingSenderId: "273719818940",
  appId: "1:273719818940:web:5fbd26dafa5d4157866eb9",
  measurementId: "G-VBRP1LGPS9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
