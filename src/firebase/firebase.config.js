// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHPF3sJwNrtuMdAvjT3Ze7P3aMRAgrMzw",
  authDomain: "monaem1.firebaseapp.com",
  projectId: "monaem1",
  storageBucket: "monaem1.appspot.com",
  messagingSenderId: "479070807961",
  appId: "1:479070807961:web:bbbf82442d8112df871508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;