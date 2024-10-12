import React, { useState } from "react";
import styles from "./ActionButton.module.scss";

export const ActionButton = ({ text, onClick }) => {
  return (
    <button className={styles.sb} onClick={onClick}>
      {text}
    </button>
  );
};
