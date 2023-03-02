import React from 'react'
import Banner from '../../components/Banner'
import CategoriesTable from '../../components/CategoriesTable'
import Footer from '../../components/Footer'
import styles from '../../styles/HomePage.module.scss'
import Slides from '../../components/Slides'
const HomePage = () => {
  return (
    <div className={styles.home}>
        <Banner/>
        <div className={styles.content}>
        <h3 className={styles.title}>Browse categories</h3>

        <CategoriesTable />
        <h3 className={styles.title}>Discover new Art</h3>
                  <Slides/>

        </div>
        
    </div>
  )
}

export default HomePage