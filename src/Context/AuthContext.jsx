import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../config";

export const AuthContexts = createContext(null);
const googleProvaider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, []);



  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const logInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }


  const continueWithGoogle = () => {
    return signInWithPopup(auth, googleProvaider)
  };

  const handleSignOut = () => {
    signOut(auth).then(()=>setUser({}))
  }

  const value = {
    user,
    continueWithGoogle,
    logInWithEmail,
    handleSignOut,
    registerWithEmail
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
