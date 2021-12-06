import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTZ6FYYS1wR6350Q7Clb2VXVWgI0JRSTE",
  authDomain: "ecommerce-proyectoreact.firebaseapp.com",
  projectId: "ecommerce-proyectoreact",
  storageBucket: "ecommerce-proyectoreact.appspot.com",
  messagingSenderId: "419920561081",
  appId: "1:419920561081:web:3d056aad0b359bc9212c68"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;