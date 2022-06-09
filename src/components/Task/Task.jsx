import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ task, handleCount, handleDeleteTask, handleCheckBox }) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li key={task.id} data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" onChange={() => { handleCheckBox(task.id) }} checked={ task.done}/>
      <div data-testid="task-text" className={task.done ? styles.strikeOff : styles.other}>{task.text}</div>
      {/* Counter here */}
      <Counter elId={task.id} count={task.count} handleCount={handleCount} />
      <button data-testid="task-remove-button" onClick={() => { handleDeleteTask(task.id) }} className={styles.deleteButton}></button>
      {/* <img src={remove} alt="delete" /> */}
    </li>
  );
};

export default Task;
