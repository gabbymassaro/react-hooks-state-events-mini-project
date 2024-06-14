import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState('')

  function inputTask(event) {
    const input = event.target.value
    setNewTask(input)
  }

  function onChange(event) {
    const select = event.target.value
    setNewCategory(select)
  }

  function onSubmit(event) {
    event.preventDefault()
    const newTaskItem = ({
      text: newTask,
      category: newCategory
    })
    onTaskFormSubmit(newTaskItem)
  }

  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={inputTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onChange}>
          {categories.slice(1).map((category) => (<option key={category}> {category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
