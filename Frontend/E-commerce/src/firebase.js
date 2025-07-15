import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp3oG8ZnCPzutbg0zZXNEzRDplgngkqS4",
  authDomain: "e-commerce-a0591.firebaseapp.com",
  projectId: "e-commerce-a0591",
  storageBucket: "e-commerce-a0591.appspot.com",
  messagingSenderId: "584118623161",
  appId: "1:584118623161:web:50c657782d2d2a07663468",
  measurementId: "G-8W4XB1F07C",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app,auth,provider};

