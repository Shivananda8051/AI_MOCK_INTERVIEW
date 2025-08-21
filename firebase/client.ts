
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Use firestore from firebase/app

const firebaseConfig = {
  apiKey: "AIzaSyDeZ2KubztvHMzzLdAds0U0Kqi_uXwYHrs",
  authDomain: "prepinsta-70823.firebaseapp.com",
  projectId: "prepinsta-70823",
  storageBucket: "prepinsta-70823.appspot.com", 
  messagingSenderId: "978843619967",
  appId: "1:978843619967:web:4bfd5871efa3a24880e54a",
  measurementId: "G-WPR9GL9NYN"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app); 