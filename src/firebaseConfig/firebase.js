import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBzF3IJrUs8G0EgZHVCly7r1w2OPh4vcfI",
  authDomain: "menuwebfirebase.firebaseapp.com",
  projectId: "menuwebfirebase",
  storageBucket: "menuwebfirebase.appspot.com",
  messagingSenderId: "964628952658",
  appId: "1:964628952658:web:e76694a50e5298c6ed118b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Base de datos
export const db = getFirestore(app);
//Imagenes
export const storage = getStorage(app);