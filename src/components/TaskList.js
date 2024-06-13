import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [taskList, setTaskList] = useState(tasks);

  function deleteTask(taskToDelete) {
    const updateTasks = taskList.filter(task => task !== taskToDelete)
    setTaskList(updateTasks)
  }

  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={() => deleteTask(task)}/>)
      )}
    </div>
  );
}

export default TaskList;
