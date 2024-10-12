import React from "react";
import styles from "./Link.module.scss";

export const Link = ({ text, link }) => {
  return (
    <a href={link} className={styles.link}>
      {text}
    </a>
  );
};
