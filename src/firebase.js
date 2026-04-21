// src/firebase.js - Firebase DISABLED (no config), using mocks
// Uncomment + add your config to enable real Firebase Auth/Firestore

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Init Firebase (DISABLED)
// const app = initializeApp(firebaseConfig);

// Auth MOCK exports (ChatRoom uses these)
export const auth = { currentUser: null };
export const loginWithGoogle = () => {};
export const logout = () => {};

// Firestore MOCK
export const db = {};

// To enable real Firebase:
// 1. Fill config above
// 2. Uncomment app = initializeApp(firebaseConfig);
// 3. Change exports to:
//    const app = initializeApp(firebaseConfig);
//    export const auth = getAuth(app);
//    const provider = new GoogleAuthProvider();
//    export const loginWithGoogle = () => signInWithPopup(auth, provider);
//    export const logout = () => signOut(auth);
//    export const db = getFirestore(app);

