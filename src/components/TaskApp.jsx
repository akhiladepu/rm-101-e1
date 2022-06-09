import React, { useEffect, useState } from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";

import tasks from "../data/tasks.json";
import Tasks from "./Tasks/Tasks";
import AddTask from './AddTask/AddTask';

const TaskApp = () => {
  const [data, setData] = useState([...tasks]);
  const [status, setStatus] = useState({ totalTask: 0, unCompletedTask: 0 });
  // console.log("11- data",data);
  const handleDeleteTask = (id) => {
    let updatedData = data.filter(el => {
      if (el.id === id) {
        return false;
      }
      return true
    })

    setData([...updatedData]);
  }

  const handleCount = (id, value) => {
    let updateData = data.map(el => {
      if (el.id === id && (el.count > 0 || value === 1)) {
        return { ...el, count: el.count + value }
      }
      // else if (el.id === id && value === 1) {
      //   return {
      //     ...el, count: el.count + value
      //   }
      // }
      return el;
    })

    setData([...updateData]);
  }

  const handleCheckBox = (id) => {
    let updatedData = data.map(el => {
      if (el.id === id) {
        return { ...el, done: !el.done }
      }
      return el;
    })

    setData([...updatedData]);
  }

  const handleAddTodo = (text) => {
    if (text.trim().length === 0) {
      return;
    }
    let check = false;
    data.every(el => {
      if (el.text.toLowerCase() === text.toLowerCase()) {
        check = true;
        return false;
      }
      console.log(el);
      return true;
    })
    if (check) {
      return;
    }
    setData([...data, {
      "id": status.totalTask + 1,
      text,
      "done": false,
      "count": 1
    }]);
  }

  useEffect(() => {
    let localUnCompleteTasks = 0;
    let total = 0;
    data.forEach(el => {
      if (el.done !== true) {
        localUnCompleteTasks++;
      }
      total++;
    })
    setStatus({ ...status, totalTask: total, unCompletedTask: localUnCompleteTasks })
  }, [data])
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader totalTask={status.totalTask} unCompletedTask={status.unCompletedTask} />
      {/* Add Task */}
      <AddTask handleAddTodo={handleAddTodo} />
      {/* Tasks */}
      <Tasks data={data} handleDeleteTask={handleDeleteTask} handleCount={handleCount} handleCheckBox={handleCheckBox} />
    </div>
  );
};

export default TaskApp;
