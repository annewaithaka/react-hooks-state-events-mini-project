import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() && category.trim()) {
      const newTask = { id: Date.now(), text: text.trim(), category: category.trim() }; // Unique ID
      onTaskFormSubmit(newTask);
      setText("");
      setCategory("");
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="details">
        Details
        <input
          id="details"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task details"
        />
      </label>
      <label htmlFor="category">
        Category
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
