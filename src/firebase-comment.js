import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBov4NDncjTTwzBTprSUJGtqmljwpqgWbI",
    authDomain: "akash-portfolio-b1529.firebaseapp.com",
    projectId: "akash-portfolio-b1529",
    storageBucket: "akash-portfolio-b1529.firebasestorage.app",
    messagingSenderId: "949889935402",
    appId: "1:949889935402:web:c622523d4c7a6f2970fb53",
    measurementId: "G-KJK0PX128C"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };