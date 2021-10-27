

import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCUQ86pOuOqIHW9N7wCEtOSQqLr8-wGlgg",
  authDomain: "ecommerce--fake-store.firebaseapp.com",
  projectId: "ecommerce--fake-store",
  storageBucket: "ecommerce--fake-store.appspot.com",
  messagingSenderId: "56675944971",
  appId: "1:56675944971:web:4756c820713237e3ee550e",
  measurementId: "G-ED22F0G9L8"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
export {auth };