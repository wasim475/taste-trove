// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkuN2AKn3wkV6TScYZgoNVknoU1kvQ6Yg",
  authDomain: "taste-trove-a11d5.firebaseapp.com",
  projectId: "taste-trove-a11d5",
  storageBucket: "taste-trove-a11d5.appspot.com",
  messagingSenderId: "446812243692",
  appId: "1:446812243692:web:c1e452ca352eb0bf8347c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;