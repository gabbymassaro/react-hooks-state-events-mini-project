import React, { useState } from "react";

function CategoryFilter({ categories }) {

  const [isSelected, setIsSelected] = useState(false);

  function selected() {
    setIsSelected(!isSelected)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category) => (
          <button key={category} onClick={selected} className={isSelected ? 'selected' : ''}>{category}</button>)
        )}
    </div>
  );
}

export default CategoryFilter;
