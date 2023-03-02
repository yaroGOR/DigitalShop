import React from 'react'
import Navigation from './Navigation'
import styles from '../styles/Header.module.scss'
import Logo from './Logo'

const Header = () => {
  return (
    <div className={styles.container}>
        <Logo/>
        <Navigation/>
    </div>
  )
}

export default Header