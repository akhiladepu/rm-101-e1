import React from "react";
import styles from "./tasks.module.css";
import empty from "../../assets/empty.svg";
import Task from "../Task/Task";

const Tasks = ({ data, handleDeleteTask, handleCount, handleCheckBox }) => {
  // NOTE: do not delete `data-testid` key value pair
  // console.log("5- data", data);
  return (
    <div>
      {
        data.length > 0
          ?
          <ul data-testid="tasks" className={styles.tasks}>
            {/* Task List */}
            {data?.map(el => {
              return (
                <Task key={ el.id} task={el} handleCount={handleCount} handleDeleteTask={handleDeleteTask} handleCheckBox={ handleCheckBox}/>
              );
            })}
          </ul>
          :
          <div data-testid="tasks-empty" className={styles.empty}>
            {/* Show when No Tasks are present */}
            <div>No tasks</div>
            <img src={empty} alt="Tasks are empty" />
          </div>
      }
    </div>
  );
};

export default Tasks;
