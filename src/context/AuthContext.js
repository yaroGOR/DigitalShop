import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth)
  }
  const signIn = (email, password) => {
   
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
    }).catch(error=>{
        console.log('error', error) 
    } )
  }

  const signUp = (email, password) => {
    console.log(email, password)
    
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        console.log(userCredential)
    }).catch(error=>{
        console.log('error in context')
        console.log(error)
    throw error})
    // todo: sign in
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('user ', currentUser )
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, signIn, signUp,  user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
