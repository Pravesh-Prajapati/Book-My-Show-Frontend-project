// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIUNvhuHUhE987l9NmWHR2ioMR7PPzK8M",
  authDomain: "bookmyshow-auth.firebaseapp.com",
  projectId: "bookmyshow-auth",
  storageBucket: "bookmyshow-auth.firebasestorage.app",
  messagingSenderId: "965279337382",
  appId: "1:965279337382:web:c7b49bf7cde7c702b51d67",
  measurementId: "G-BWLME6H3FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth= getAuth(app)