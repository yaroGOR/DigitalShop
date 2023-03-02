import React from 'react'
import { useSelector } from "react-redux";
import {addItem, removeItem} from '../redux/reducers/cartSlice';
import CartItem from '../components/CartItem';
import styles from '../styles/CartPage.module.scss'
function CartPage(){
    let totalPrice = 0
    const cart = useSelector(state => state.cart.cart)
    cart?.forEach((element)=>totalPrice+=Number(element.price))
    console.log('cart', cart)
    return(
        <div className={styles.container}>
            <ul>
                {cart?.map((item)=>{
                   return  <CartItem key={new Date()} item={item}/>
                })}
            </ul>
            <p>Totoal Price: {totalPrice} $</p>
          
        </div>
    )
}

export default CartPage
