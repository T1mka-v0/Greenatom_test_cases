import React from "react";
import styles from "./MyButton.module.scss";

export const MyButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.mybutton}>
      {children}
    </button>
  );
};
