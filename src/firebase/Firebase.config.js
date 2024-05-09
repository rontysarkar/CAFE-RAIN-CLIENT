// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3rOawRhFBo5GDx-zza-QgVjbGeu4amT0",
  authDomain: "cafe-rain.firebaseapp.com",
  projectId: "cafe-rain",
  storageBucket: "cafe-rain.appspot.com",
  messagingSenderId: "556753702851",
  appId: "1:556753702851:web:032fd0738c8f524ba0f776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);