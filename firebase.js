// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBULrNVGvSUSiUOTV5Mg_lkVLpEkyVQqus",
  authDomain: "afnan-recipes.firebaseapp.com",
  projectId: "afnan-recipes",
  storageBucket: "afnan-recipes.appspot.com",
  messagingSenderId: "509344890202",
  appId: "1:509344890202:web:611fa0a2a98cc84cad8763",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
