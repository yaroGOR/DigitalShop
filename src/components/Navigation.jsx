import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Navigation.module.scss'
import { UserAuth } from "../context/AuthContext";

const Navigation = () => {
  const {user} = UserAuth()
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        {!user ?  <li>
          <Link to="/login">Login</Link>
        </li> :  <li className="account">
          <Link to="/account">Account</Link>
        </li>}
        {user && <li><Link to='/cart'>Cart</Link></li>}
       
      </ul>
    </nav>
  );
};

export default Navigation;
