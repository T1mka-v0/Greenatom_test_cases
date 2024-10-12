import React, { useState } from "react";
import styles from "./SwitchButton.module.scss";

export const SwitchButton = ({ text, onClick }) => {
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
      {text}
    </button>
  );
};
