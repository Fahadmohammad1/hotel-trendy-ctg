// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkSodzlySJXmzyH0Dxm5AfQU5gDWClF0I",
  authDomain: "hotel-trendy-ctg.firebaseapp.com",
  projectId: "hotel-trendy-ctg",
  storageBucket: "hotel-trendy-ctg.appspot.com",
  messagingSenderId: "381605522642",
  appId: "1:381605522642:web:fa571dfaaee3c897cf110b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
