// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAypZ_zyZ3gdzGstSCDRQdUxTwB1biJspw",
  authDomain: "espresso-main.firebaseapp.com",
  projectId: "espresso-main",
  storageBucket: "espresso-main.firebasestorage.app",
  messagingSenderId: "13763936452",
  appId: "1:13763936452:web:31e81d6662dc64493a4991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth