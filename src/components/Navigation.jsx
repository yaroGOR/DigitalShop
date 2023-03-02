import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.scss";
import { UserAuth } from "../context/AuthContext";
import { useMedia } from "../hooks/useMedia";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Icon = ({ clicked, onClick }) => {
  if (clicked) {
    return <CloseIcon onClick={onClick} />;
  } else return <MenuIcon onClick={onClick} />;
};
const Navigation = () => {
  let width = useMedia();

  const [showNav, setShowNav] = useState(true);

  let isMobile = width < 900 ? true : false;
  useEffect(() => {
    if (isMobile) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [isMobile]);
  const { user } = UserAuth();
  return (
    <>
       {isMobile && <Icon clicked={showNav} onClick={() => {
                    setShowNav(prev => !prev)
                }} />}
      {showNav && (
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
            {!user ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <li className="account">
                <Link to="/account">Account</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
