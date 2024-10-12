import React from "react";
import styles from "./AddTaskInput.module.scss";

export const AddTaskInput = ({ onSearch, value, onChange }) => {
  const handleSearchPressed = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <input
      placeholder="Добавить задачу..."
      className={styles.input}
      value={value}
      onChange={(e) => handleInputChange(e)}
      onKeyDown={(e) => handleSearchPressed(e)}
      type="text"
    />
  );
};
