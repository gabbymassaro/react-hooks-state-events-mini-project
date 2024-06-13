import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const displayTasks = tasks.map((task, index) => (
    <Task key={index} text={task.text} />))

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
