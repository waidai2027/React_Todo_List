// src/pages/HomePage.js

import React, { useState } from "react";
import TaskList from "../components/TaskList"; // Import TaskList component
import TaskInput from "../components/TaskInput"; // Import TaskInput component
import './HomePage.css'; // Import CSS for styling

function HomePage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks((prevTasks) => [...prevTasks, { text: taskName, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default HomePage;
