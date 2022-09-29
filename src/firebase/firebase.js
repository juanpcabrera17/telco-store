import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJyXpgTl6daIVO0WCrcVy608zbTGRR8g0",
  authDomain: "telco-store.firebaseapp.com",
  projectId: "telco-store",
  storageBucket: "telco-store.appspot.com",
  messagingSenderId: "846663570104",
  appId: "1:846663570104:web:cd05ed61ab3a14416b9a4d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)