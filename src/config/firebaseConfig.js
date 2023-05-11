// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASOhAzSq3hzNY1jdWybTVUf9RzIGHbaQw",
  authDomain: "manage-library-22907.firebaseapp.com",
  projectId: "manage-library-22907",
  storageBucket: "manage-library-22907.appspot.com",
  messagingSenderId: "946322080200",
  appId: "1:946322080200:web:52257600ca89dad5d800fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storeage Firebase
export const storage = getStorage(app)