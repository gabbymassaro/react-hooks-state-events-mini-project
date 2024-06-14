import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [taskList, setTaskList] = useState(TASKS)

  function deleteTask(taskToDelete) {
    const updateTasks = taskList.filter(task => task !== taskToDelete)
    setTaskList(updateTasks)
  }

  const tasksToDisplay = taskList.filter((task) => {
    if (selectedCategory === 'All') {
      return true
    } else if (task.category === selectedCategory) {
      return true
    } else {
      return false
    }
  })

  function onSubmit(newTaskItem) {
    onItemFormSubmit(newTaskItem)
  }

  function onItemFormSubmit(newTaskItem) {
    setTaskList([newTaskItem, ...taskList])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onSubmit}/>
      <TaskList
        tasks={tasksToDisplay}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
