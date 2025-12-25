import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsX6p_KzOG84L2tClqsXTzhyertGsJ9-U",
  authDomain: "ag-inventory-4c089.firebaseapp.com",
  projectId: "ag-inventory-4c089",
  storageBucket: "ag-inventory-4c089.appspot.com",
  messagingSenderId: "1040708274288",
  appId: "1:1040708274288:web:60841d932ac60e6ba94cb5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);