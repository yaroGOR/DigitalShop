import React from 'react'
import styles from '../styles/AccountPage.module.scss'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const { user, logOut  }= UserAuth()
  console.log(user)
 

  return (
    <div className={styles.container}>
              <p>Welcome <span className={styles.userName}>{user?.displayName}</span></p>
              <button onClick={logOut}>Sign out</button>
    </div>
  )
}

export default Account