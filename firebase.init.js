// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbh9XxqsVlsoM1ZXg_6V8t2X5OxhXN9bY",
  authDomain: "publicationsbd1.firebaseapp.com",
  projectId: "publicationsbd1",
  storageBucket: "publicationsbd1.appspot.com",
  messagingSenderId: "968071888962",
  appId: "1:968071888962:web:3b5aca479402130af6addb"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;