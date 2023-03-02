import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "noname-1fa72.firebaseapp.com",
  projectId: "noname-1fa72",
  storageBucket: "noname-1fa72.appspot.com",
  messagingSenderId: "1075773870017",
  appId: "1:1075773870017:web:d8edac50f557ac95ff6940",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const db = getFirestore(app)

