import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDt7QccfAx5Gle0Qzw_OFXzueCJgY4VVDs",
  authDomain: "uniscout-a4f35.firebaseapp.com",
  databaseURL: "https://uniscout-a4f35-default-rtdb.firebaseio.com/",
  projectId: "uniscout-a4f35",
  storageBucket: "gs://uniscout-a4f35.appspot.com",
  messagingSenderId: "222106994478",
  appId: "1:222106994478:web:0624dac75fe89943085cbf",
  measurementId: "G-MJST0MPDZ3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();
