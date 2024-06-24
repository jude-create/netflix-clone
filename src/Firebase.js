// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1PJk4r06AqFr4Dp29bMZQuPotc2PeRqk',
  authDomain: 'netflix-clone-7cc36.firebaseapp.com',
  projectId: 'netflix-clone-7cc36',
  storageBucket: 'netflix-clone-7cc36.appspot.com ',
  messagingSender: '606333923218',
  appId:  '1:606333923218:web:371f8262d0df3c157a5b4b'
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
