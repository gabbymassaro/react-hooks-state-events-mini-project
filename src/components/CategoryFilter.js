import React from "react";

function CategoryFilter({ categories }) {

  function selected(selectedCategory) {
    console.log(selectedCategory)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category) => (
          <button key={category} onClick={() => selected(category)}>{category}</button>)
        )}
    </div>
  );
}

export default CategoryFilter;
