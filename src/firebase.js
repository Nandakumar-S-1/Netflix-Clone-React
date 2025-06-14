import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8VgfAYA6W-p1TgQRHdBIc3b8lB01Xr2U",
  authDomain: "netflix-clone-cc3db.firebaseapp.com",
  projectId: "netflix-clone-cc3db",
  storageBucket: "netflix-clone-cc3db.firebasestorage.app",
  messagingSenderId: "615275986130",
  appId: "1:615275986130:web:1f3734e6417023cdcf810b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    let user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log("issues  in the signup", error);
    toast.error(error.code.spllit('/')[1].split('-').join(' '))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log("login error",error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const logout =async () => {
    signOut(auth)
}

export {
    auth,db,login,signup,logout
}