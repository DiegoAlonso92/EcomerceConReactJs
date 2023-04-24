// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvJLrPjn-hrV2YEN3axF8le_UYUdGWFI0",
  authDomain: "rj-ecommerce-veg.firebaseapp.com",
  projectId: "rj-ecommerce-veg",
  storageBucket: "rj-ecommerce-veg.appspot.com",
  messagingSenderId: "980903539901",
  appId: "1:980903539901:web:90bfd2c8e034f7c7f433d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()