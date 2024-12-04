// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlShWKJ4ECGNu4Z73LMUUSDfQuU6ndZv4",
  authDomain: "user-login-system-7c963.firebaseapp.com",
  projectId: "user-login-system-7c963",
  storageBucket: "user-login-system-7c963.firebasestorage.app",
  messagingSenderId: "944517273865",
  appId: "1:944517273865:web:018939c49a4e313a9a1bd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;