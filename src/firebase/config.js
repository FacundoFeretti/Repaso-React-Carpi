import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsokBzU8dreBXLGnmsYgOA_WjRcJGZGP8",
  authDomain: "proyecto-carpi.firebaseapp.com",
  projectId: "proyecto-carpi",
  storageBucket: "proyecto-carpi.appspot.com",
  messagingSenderId: "468689267776",
  appId: "1:468689267776:web:17bd65f3b626dfbd8d43a5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);