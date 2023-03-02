import React from 'react'
import styles from '../styles/Modal.module.scss'

const Modal = (props) => {
  return (
    <div className='modal'>
      {props.children}
      </div>
  )
}

export default Modal