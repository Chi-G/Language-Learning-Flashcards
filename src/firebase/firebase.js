// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZHfEJXodXVFLpO1R7KE3QlyhX6K1RUjQ",
  authDomain: "language-learning-flashc-761aa.firebaseapp.com",
  projectId: "language-learning-flashc-761aa",
  storageBucket: "language-learning-flashc-761aa.appspot.com",
  messagingSenderId: "301138581341",
  appId: "1:301138581341:web:d5dd3bf1d3687cfb457ab4",
  measurementId: "G-NCX00080YD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



export { app, auth };
