// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLRpitP_7I1zRq1NZ05GCKzW-Al4iLJqo",
  authDomain: "shopsphere-40599.firebaseapp.com",
  projectId: "shopsphere-40599",
  storageBucket: "shopsphere-40599.firebasestorage.app",
  messagingSenderId: "534576456391",
  appId: "1:534576456391:web:2fddc90cb198383e1094e2",
  measurementId: "G-44XH9EKFD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)