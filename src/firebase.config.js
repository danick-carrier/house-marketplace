import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSa_GQLskBXJQqU1QT2VZCjlAQazczVc4",
  authDomain: "house-marketplace-app-3d281.firebaseapp.com",
  projectId: "house-marketplace-app-3d281",
  storageBucket: "house-marketplace-app-3d281.appspot.com",
  messagingSenderId: "1054594084910",
  appId: "1:1054594084910:web:fe642956dc404aa4a7efbf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
