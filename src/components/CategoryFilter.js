import React, { useState } from "react";

// Functional component accepts categories and a callback for selection changes
function CategoryFilter({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
    if (onCategorySelect) {
      onCategorySelect(category); // Notify parent component of the selected category
    }
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
