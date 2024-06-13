import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [taskList, setTaskList] = useState(tasks);

  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} />)
      )}
    </div>
  );
}

export default TaskList;
