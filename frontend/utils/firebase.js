// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kortexai-66ad9.firebaseapp.com",
  projectId: "kortexai-66ad9",
  storageBucket: "kortexai-66ad9.firebasestorage.app",
  messagingSenderId: "1035162761899",
  appId: "1:1035162761899:web:d817af394d8e9c4a9915ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export {auth, googleProvider}