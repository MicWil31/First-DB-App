import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.ButtonsWrapper}>
      <button className={`${styles.Button} ${styles.LoadDB}`}>Load DB</button>
      <button className={`${styles.Button} ${styles.QueryDB}`}>Query DB</button>
      <button className={`${styles.Button} ${styles.ClearDB}`}>Clear DB</button>
    </div>
  );
};

export default Buttons;
