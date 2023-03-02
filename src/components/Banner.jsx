import styles from "../styles/Banner.module.scss";
import React from "react";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      <h1>
        Unleash your creativity with our digital art and design your dream
        space!
      </h1>
      <h2>Tons of Digital Art Images</h2>
      <button>Browse Now!</button>
      </div>
    </div>
  );
};

export default Banner;
