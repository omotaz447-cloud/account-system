// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8bHvdFEG6oW2AcQ0BCCvB6kEQ9wpK10M",
  authDomain: "account-system-a1e90.firebaseapp.com",
  projectId: "account-system-a1e90",
  storageBucket: "account-system-a1e90.firebasestorage.app",
  messagingSenderId: "893226959392",
  appId: "1:893226959392:web:676b5d215c2476eb9db245",
  measurementId: "G-M0CENKS757"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
