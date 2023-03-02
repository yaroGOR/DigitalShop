import React, { useEffect } from 'react'
import LoginForm from '../../components/LoginForm'
import styles from '../../styles/Login.module.scss'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router'
const Login = () => {
  const navigate = useNavigate();

  const {user } = UserAuth();

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default Login