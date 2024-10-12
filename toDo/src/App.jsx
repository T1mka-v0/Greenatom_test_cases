import { useEffect, useState } from "react";
import { TaskCard } from "./components/TaskCard/TaskCard";
import ControlBar from "./components/ControlBar/ControlBar";
import "./index.scss";
import { AddTaskInput } from "./components/AddTaskInput/AddTaskInput";
import { observer } from "mobx-react-lite";
import { taskListStore } from "./store/store";
import { MyButton } from "./components/MyButton/MyButton";

const App = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (newValue) => {
    setValue(newValue);
  };
  const addTask = () => {
    if (value.length > 0) {
      taskListStore.addTask(value);
    }
    setValue("");
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="wrap">
        <h1 className="wrap__h1">Tasky</h1>
        <ControlBar />
        <div className="wrap__searchbar">
          <AddTaskInput
            onSearch={addTask}
            value={value}
            onChange={handleInputChange}
          />
          <MyButton>+</MyButton>
        </div>
        {taskListStore.list.length ? (
          <h2 className="wrap__h2">Задачи:</h2>
        ) : (
          <h2 className="wrap__h2">Задач больше нет, можете отдохнуть</h2>
        )}
        {taskListStore.list.map((item, index) => {
          let needHighlight =
            ((index + 1) % 2 === 0 && taskListStore.evenSelected) ||
            ((index + 1) % 2 !== 0 && taskListStore.oddSelected);
          return (
            <TaskCard
              title={item.title}
              key={item.id}
              onComplete={() => taskListStore.completeTask(item.id)}
              onUncomplete={() => taskListStore.uncompleteTask(item.id)}
              onDelete={() => taskListStore.removeTask(item.id)}
              completed={item.isCompleted}
              highlight={needHighlight}
            />
          );
        })}
        {taskListStore.completed.length ? (
          <h2 className="wrap__h2">Выполненные:</h2>
        ) : null}

        {taskListStore.completed.length
          ? taskListStore.completed.map((item) => {
              return (
                <TaskCard
                  title={item.title}
                  key={item.id}
                  onComplete={() => taskListStore.completeTask(item.id)}
                  onUncomplete={() => taskListStore.uncompleteTask(item.id)}
                  onDelete={() => taskListStore.removeTask(item.id)}
                  completed={item.isCompleted}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default observer(App);
