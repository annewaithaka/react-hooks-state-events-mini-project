import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}       // Use a unique key prop for each task
          text={task.text}    // Pass the task text
          category={task.category} // Pass the task category
        />
      ))}
    </div>
  );
}

export default TaskList;
