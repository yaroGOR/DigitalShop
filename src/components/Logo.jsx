import React from 'react'
import styles from '../styles/Logo.module.scss'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <h2 className={styles.logo}><Link to='/'>DigitalShop</Link></h2>
  )
}

export default Logo