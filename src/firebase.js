import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBov4NDncjTTwzBTprSUJGtqmljwpqgWbI",
    authDomain: "akash-portfolio-b1529.firebaseapp.com",
    projectId: "akash-portfolio-b1529",
    storageBucket: "akash-portfolio-b1529.firebasestorage.app",
    messagingSenderId: "949889935402",
    appId: "1:949889935402:web:c622523d4c7a6f2970fb53",
    measurementId: "G-KJK0PX128C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };