
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATMOBVAJ0ZZA7a7EBP2WbM2oTPRD0QZwk",
  authDomain: "tamplate-intigrate.firebaseapp.com",
  databaseURL: "https://tamplate-intigrate-default-rtdb.firebaseio.com",
  projectId: "tamplate-intigrate",
  storageBucket: "tamplate-intigrate.appspot.com",
  messagingSenderId: "627238933272",
  appId: "1:627238933272:web:d1e93e6a2c92b5c0c5846d",
  measurementId: "G-H5LD4XP3GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


 export default db