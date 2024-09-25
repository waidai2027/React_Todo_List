// src/components/TaskItem.js

import React from "react";

function TaskItem({ task, index, deleteTask, toggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(index)}>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default TaskItem;
