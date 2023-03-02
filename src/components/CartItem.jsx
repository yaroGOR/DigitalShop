import React from "react";
import styles from "../styles/CartItem.module.scss";
const CartItem = (props) => {
  console.log(props);
  const { image, title, price } = props.item;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={image} alt={title} />
      </div>{" "}
      <div>
        <h3>{title}</h3>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default CartItem;
