import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADdtHWCL-U1rt0fuobK93JWrUXeiggM4c",
  authDomain: "new-app-firebase-auth.firebaseapp.com",
  projectId: "new-app-firebase-auth",
  storageBucket: "new-app-firebase-auth.firebasestorage.app",
  messagingSenderId: "939447136131",
  appId: "1:939447136131:web:1862858e6cbd5ccc5b50b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
  prompt: 'select_account'
});

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export default app;