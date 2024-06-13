import React from "react";
import Task from "./Task";

function TaskList({ taskList, setTaskList, selectedCategory }) {

  function deleteTask(taskToDelete) {
    const updateTasks = taskList.filter(task => task !== taskToDelete)
    setTaskList(updateTasks)
  }

  const tasksToDisplay = taskList.filter((task) => {
    if (selectedCategory === "All") {
      return true
    } else if (task.category === selectedCategory) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className="tasks">
      {tasksToDisplay.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={() => deleteTask(task)}/>)
      )}
    </div>
  );
}

export default TaskList;
