// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw_81IGH-f6XHRK-uMG3K0GC6RoPcXbwA",
  authDomain: "toysportz.firebaseapp.com",
  projectId: "toysportz",
  storageBucket: "toysportz.appspot.com",
  messagingSenderId: "205073402353",
  appId: "1:205073402353:web:75d9be4698e4f1ded1dc50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;