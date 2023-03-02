import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

import styles from '../styles/Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.container}>
        <Header />
        <Outlet className={styles.outlet}/>
        <Footer/>
    </div>
  )
}

export default Layout