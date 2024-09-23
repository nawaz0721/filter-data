import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJh-iX5yP-AfAa6FcNw_wU5VM0-egdcxU",
  authDomain: "e-commerce-6e035.firebaseapp.com",
  projectId: "e-commerce-6e035",
  storageBucket: "e-commerce-6e035.appspot.com",
  messagingSenderId: "653939144525",
  appId: "1:653939144525:web:b9638c70a6b14389842904",
  measurementId: "G-9EBLJ80L1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
