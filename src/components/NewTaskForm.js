import React from "react";

function NewTaskForm({ categories, inputTask, onChange, onSubmit }) {

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
