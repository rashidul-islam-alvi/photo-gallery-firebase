/** @format */

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyzLmts5gxW6-kK0z7wAnUj4jSHdpt-M",
  authDomain: "fir-gallery-dd1be.firebaseapp.com",
  projectId: "fir-gallery-dd1be",
  storageBucket: "fir-gallery-dd1be.appspot.com",
  messagingSenderId: "996996789884",
  appId: "1:996996789884:web:02ef5a9fc2b3a12a027bf9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const projectFirestore = getFirestore(firebaseApp);
const timestamp = serverTimestamp();

export { projectFirestore, projectStorage, timestamp };
