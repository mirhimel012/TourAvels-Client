// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvLXsEa3rqoKiKZQIW5P2F60riATFbRVo",
  authDomain: "touravelsfire.firebaseapp.com",
  projectId: "touravelsfire",
  storageBucket: "touravelsfire.firebasestorage.app",
  messagingSenderId: "384612616251",
  appId: "1:384612616251:web:608a3ea31a6637a1d0f41e",
  measurementId: "G-EGVDRMM585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;