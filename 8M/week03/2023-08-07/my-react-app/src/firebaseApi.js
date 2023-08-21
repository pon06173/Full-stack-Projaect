import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdyhNSpmyNAFG3o74lziprdpqi6Z5GGKE",
  authDomain: "test02-b0b70.firebaseapp.com",
  projectId: "test02-b0b70",
  storageBucket: "test02-b0b70.appspot.com",
  messagingSenderId: "504154528117",
  appId: "1:504154528117:web:532d2b92a8b98f6dfbdb3c",
  measurementId: "G-CESP7VCVKZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
