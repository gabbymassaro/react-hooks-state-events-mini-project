import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [taskList, setTaskList] = useState("")
  const [filteredCategories, setFilteredCategories] = useState([])


  // console.log(taskList)
  // function filterByCategory() {
  //   if (selectedCategory === taskList.category){

  //   }
  // }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm />
      <TaskList
        tasks={TASKS}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
