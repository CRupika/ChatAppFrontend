import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoa4_3bi8Sxuc-wBwzodDepIDIab-z5dQ",
  authDomain: "login-25395.firebaseapp.com",
  projectId: "login-25395",
  storageBucket: "login-25395.firebasestorage.app",
  messagingSenderId: "263160143478",
  appId: "1:263160143478:web:a312e226288d9d9bb88957"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'en'
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// const googleLogin = document.getElementById("google-login-btn");
// googleLogin.addEventListener("click",function(){
//     alert(5)
// })

