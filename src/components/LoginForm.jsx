import React, { useEffect, useState } from 'react'
import { GoogleButton } from "react-google-button";
import styles from '../styles/LoginForm.module.scss'
import { useNavigate } from 'react-router';
import { UserAuth } from '../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate();
  const { googleSignIn,signIn, signUp, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignIn = (email, password) => {
    try {
      signIn(email, password)
    } catch(error) {
      console.log(error)
      setShowError(true)

    }

  }
  const handleSignUp = (email, password) => {
    try {
      signUp(email, password)
    } catch(error) {
      console.log(error)
    }


  }

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className={styles.form}>
        <form>
            <input placeholder='Enter Your email' onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
            <button type='button' onClick={()=>{handleSignIn(email, password)}}>Log in</button>
            <button type='button' onClick={()=>{handleSignUp(email, password)}}>Sign up</button>
            {showError && <p className={styles.error}>Can't Log In</p>}
            <GoogleButton onClick={handleGoogleSignIn}/>


        </form>
    </div>
  )
}

export default LoginForm