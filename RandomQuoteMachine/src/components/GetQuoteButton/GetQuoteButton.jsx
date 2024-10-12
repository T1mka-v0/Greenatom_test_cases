import React from "react";
import styles from "./GetQuoteButton.module.scss";

const GetQuoteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Новая цитата
    </button>
  );
};

export { GetQuoteButton };
