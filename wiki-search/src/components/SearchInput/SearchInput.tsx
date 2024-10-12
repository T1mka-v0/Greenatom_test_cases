import React from "react";
import styles from "./SearchInput.module.scss";

export const SearchInput = ({ onSearch, value, onChange }) => {
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
      placeholder="Поиск в википедии..."
      className={styles.input}
      value={value}
      onChange={(e) => handleInputChange(e)}
      onKeyDown={(e) => handleSearchPressed(e)}
      type="text"
    />
  );
};
