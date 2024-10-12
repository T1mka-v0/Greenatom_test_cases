import React from "react";
import styles from "./QuoteCard.module.scss";

const QuoteCard = ({ text, author }) => {
  return (
    <div className={styles.card}>
      <span>"{text}"</span>
      <span>Автор: {author}</span>
    </div>
  );
};

export { QuoteCard };
