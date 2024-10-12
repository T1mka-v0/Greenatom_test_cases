import React from "react";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { ActionButton } from "../ActionButton/ActionButton";
import { taskListStore } from "../../store/store";
import { observer } from "mobx-react-lite";

const ControlBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "10px",
        width: "100%",
      }}
    >
      <SwitchButton
        text={"Выделить четные строки"}
        onClick={() => {
          taskListStore.switchEven();
        }}
      />
      <SwitchButton
        text={"Выделить нечетные строки"}
        onClick={() => {
          taskListStore.switchOdd();
        }}
      />
      <ActionButton
        text={"Удалить первую задачу"}
        onClick={() => {
          taskListStore.deleteFirst();
        }}
      />
      <ActionButton
        text={"Удалить последнюю задачу"}
        onClick={() => {
          taskListStore.deleteLast();
        }}
      />
    </div>
  );
};

export default observer(ControlBar);
