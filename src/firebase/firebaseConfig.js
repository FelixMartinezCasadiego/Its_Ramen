// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8hoFJZmX0HYrv0t-rW6cAo6x3jg_i7PU",
  authDomain: "itsramen-2c032.firebaseapp.com",
  projectId: "itsramen-2c032",
  storageBucket: "itsramen-2c032.appspot.com",
  messagingSenderId: "583553977323",
  appId: "1:583553977323:web:c72aacf529aa9dd39be7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);