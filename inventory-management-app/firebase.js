import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyChHAb6EhHsmzlSRkM0O5YCO2WUt3ta1is",
    authDomain: "inventory-management-app-b1ce5.firebaseapp.com",
    projectId: "inventory-management-app-b1ce5",
    storageBucket: "inventory-management-app-b1ce5.appspot.com",
    messagingSenderId: "420741178201",
    appId: "1:420741178201:web:cc2a5b91fcf59b8e666248",
    measurementId: "G-3ZLE91ZZ4D"
  };
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };