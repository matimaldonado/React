// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCErqTOwjvX1muj5DwjcZr0Yocpp8SXQOE",
  authDomain: "msm-reactjs.firebaseapp.com",
  projectId: "msm-reactjs",
  storageBucket: "msm-reactjs.appspot.com",
  messagingSenderId: "695011775578",
  appId: "1:695011775578:web:79da0a9c036df7a9de3463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firebase
const db = getFirestore(app)

export default db