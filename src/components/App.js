import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [taskList, setTaskList] = useState(TASKS)
  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState('')

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

  function inputTask(event) {
    const input = event.target.value
    setNewTask(input)
  }

  function onChange(event) {
    const select = event.target.value
    setNewCategory(select)
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
        inputTask={inputTask}
        onChange={onChange}/>
      <TaskList
        tasks={tasksToDisplay}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
