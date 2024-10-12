import React, { useState } from "react";
import styles from "./TaskCard.module.scss";
import { MyButton } from "../MyButton/MyButton";

export const TaskCard = ({
  title,
  onComplete,
  onUncomplete,
  onDelete,
  completed,
  highlight,
}) => {
  const handleSwitch = () => {
    if (completed) {
      onUncomplete();
    } else {
      onComplete();
    }
  };
  return (
    <div className={`${styles.tc} ${highlight ? styles.highlight : null}`}>
      <input type="checkbox" checked={completed} onChange={handleSwitch} />
      <span>{title}</span>
      <MyButton onClick={onDelete}>-</MyButton>
    </div>
  );
};
