import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ handleAddTodo }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [todo, setTodo] = useState("");
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
      <button data-testid="add-task-button" onClick={() => { handleAddTodo(todo); setTodo("") }}>
        {/* <img src={Add} alt="add" />  // tried to add remove svg with transform(45deg), but unable to increase the stroke/thickness of the svg */}
        +
      </button>
    </div>
  );
};

export default AddTask;
