import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAvKbdFDHtdEFZlCWoELBm68dYeri--pBM",
  authDomain: "linkyard-d5fdd.firebaseapp.com",
  projectId: "linkyard-d5fdd",
  storageBucket: "linkyard-d5fdd.appspot.com",
  messagingSenderId: "534451302386",
  appId: "1:534451302386:web:226371f7b647f887f1c56b",
  measurementId: "G-C60Q1NHDFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()