import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [taskList, setTaskList] = useState(tasks);

  function deleteTask(event) {
    event.preventDefault()
    console.log("Hi")
  }


  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={deleteTask}/>)
      )}
    </div>
  );
}

export default TaskList;
