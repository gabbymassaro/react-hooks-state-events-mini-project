import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [taskList, setTaskList] = useState(TASKS)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm />
      <TaskList
        selectedCategory={selectedCategory}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
