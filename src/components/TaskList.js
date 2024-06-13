import React from "react";
import Task from "./Task";

function TaskList({ tasks, taskList, setTaskList }) {

  function deleteTask(taskToDelete) {
    const updateTasks = taskList.filter(task => task !== taskToDelete)
    setTaskList(updateTasks)
    console.log(updateTasks)
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={() => deleteTask(task)}/>)
      )}
    </div>
  );
}

export default TaskList;
