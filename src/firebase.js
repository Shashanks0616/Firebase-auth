import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGdaf7tPjVzMTQatVI9kDN7zefTkC3c84",
  authDomain: "fir-auth-cc495.firebaseapp.com",
  projectId: "fir-auth-cc495",
  storageBucket: "fir-auth-cc495.appspot.com",
  messagingSenderId: "291642566372",
  appId: "1:291642566372:web:652b7fd9a11e6c5c7ceef1",
  measurementId: "G-HX5P2GGWCF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
