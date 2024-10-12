import React, { useState } from "react";
import styles from "./SearchButton.module.scss";

export const SearchButton = ({ onClick, children }) => {
  const [pressed, setPressed] = useState(false);
  const toggle = () => {
    setPressed((prev) => !prev);
  };
  return (
    <button
      className={styles.sb}
      onClick={() => {
        onClick();
        toggle();
      }}
      style={pressed ? { outline: "2px solid #f87972" } : {}}
    >
      {children}
    </button>
  );
};
