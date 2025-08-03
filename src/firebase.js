// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2CMDWdDzLwI9HuMWdwdpXtEKF1Xzbzvg",
  authDomain: "bookbazar-636c4.firebaseapp.com",
  projectId: "bookbazar-636c4",
  storageBucket: "bookbazar-636c4.appspot.com",
  messagingSenderId: "924724540620",
  appId: "1:924724540620:web:0beee691f255d9bf177e69",
  measurementId: "G-CH4EYL6FKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export default app;