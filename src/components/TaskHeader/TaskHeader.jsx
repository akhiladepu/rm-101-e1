import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ totalTask, unCompletedTask }) => {
  // sample values to be replaced

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      You have{" "}
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      {" "}of{" "}
      <b data-testid="header-total-task">{totalTask}</b>
      {" "}tasks remaining.
    </div>
  );
};

export default TaskHeader;
