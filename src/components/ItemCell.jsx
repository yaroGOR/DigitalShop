import React, { useState } from 'react'
import styles from '../styles/ItemCell.module.scss'
import Modal from './Modal'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/reducers/cartSlice'

const ItemCell = (props) => {
    const { user } = UserAuth()
    const item = props.item
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    let modalComponent = <p>To buy product, please, <Link to='/login' >Log In</Link> </p>
  const handleCart = () =>{
    console.log('itemadded', item)
    console.log('added to cart')
    dispatch(addItem(item))

  }
  const handleBuy = () =>{
    console.log('handle buy')
    if (user) {

         modalComponent = <p> Item is unaviable </p>
         setShowModal(true)

    } else {
         modalComponent = <p>To buy product, please, <Link to='/login' >Log In</Link> </p>
         setShowModal(true)


    }


  }
  return (<>
    


    <div className={styles.itemCell} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
    {showModal ? <Modal show={show} setShow={setShow}>{modalComponent}</Modal>
    
    :
    <>
    <Link key={item.id} to={"/items/" + item.id}>

        <h4 className={styles.title}>
        {item?.title}
        </h4>
        <img src={item?.image} alt = {item?.alt}/>
        <p className={styles.description}>{item?.description}</p>
        <p className={styles.price}>{item?.price} $</p>
        </Link>
        <div className={styles.buttonContainer}>
        <button onClick={()=>handleCart()}>Add to cart</button>
        <button onClick={()=> handleBuy()}>Buy</button>
        </div>
        </>
}
        </div>


        </>
  )
}

export default ItemCell