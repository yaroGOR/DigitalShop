import React, { useState } from "react";
import { useLocation } from "react-router";
import { useGetDataById } from "../firebase/getDataById";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducers/cartSlice";
import styles from '../styles/ItemPage.module.scss'
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


const ItemPage = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const item = useGetDataById(id);
  item.id = id
  const {user} = UserAuth()
  let message = ''
  const handleBuy = () => {
    if (user) {
      message = "Item is unaviable"
      
    } else {
      message = 'Please Log In'
    }
    alert(message)
    

  }
  return (
    
    <div className={styles.container}>
      <div className={styles.left}>
        
        <img src={item.image} alt={item.alt} />
      </div>
      <div className={styles.right}> 
       <h1 className={styles.title}>
        {item.title}
        </h1> 
        <p>{item.description}</p>
        <p>{item.price} $</p>
        <div className={styles.buttonContainer}>
        <button onClick={()=>{dispatch(addItem(item))}}> Add to cart </button>
        <button onClick={()=>handleBuy()}> Buy </button>
        </div>
       
        
        
        </div>
    </div>
  );
};

export default ItemPage;
