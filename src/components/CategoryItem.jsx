import React from 'react'
import styles from '../styles/CategoryItem.module.scss'
import { Link, useLocation } from 'react-router-dom'

const CategoryItem = (props) => {
    const title = props.category?.title
    const img = props.category?.img
    const alt = props.category?.alt
    const category = props.category?.category
    console.log('props', props)
    console.log('category', category)
    

  return (
    <div className={styles.item}>
    <Link to={`/items?category=>${category}`}>
        <h2>{title}</h2>
    </Link>
    </div>

  )
}

export default CategoryItem