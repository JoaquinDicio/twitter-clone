
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHMy1r7lJqK7-uSqoRr3VmSG-6p_6Emms",
  authDomain: "twitter-clone-bdc60.firebaseapp.com",
  projectId: "twitter-clone-bdc60",
  storageBucket: "twitter-clone-bdc60.appspot.com",
  messagingSenderId: "224334433590",
  appId: "1:224334433590:web:66504354aa41a2b6043797"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db
