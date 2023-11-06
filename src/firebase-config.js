import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyyiK0bSugDpqVt53vpsUCyrlDfYLVn2I",
  authDomain: "first-firebase-project-dbf3f.firebaseapp.com",
  databaseURL: "https://first-firebase-project-dbf3f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-firebase-project-dbf3f",
  storageBucket: "first-firebase-project-dbf3f.appspot.com",
  messagingSenderId: "356980671806",
  appId: "1:356980671806:web:f54112538886c1a627986f",
  measurementId: "G-RS9YCRHTF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);