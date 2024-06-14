import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {

  function selected(category) {
    setSelectedCategory(category === selectedCategory ? 'All' : category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => selected(category)}
            className={category === selectedCategory ? 'selected' : 'All'}
          > {category}
          </button>)
        )}
    </div>
  );
}

export default CategoryFilter;
