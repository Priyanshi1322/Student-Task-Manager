import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Study React",
    "Complete assignment",
    "Revise DSA",
  ]);
  const [newTask, setNewTask] = useState("");
  const [isDark, setIsDark] = useState(false);

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function clearAllTasks() {
    setTasks([]);
  }

  return (
    <div className={isDark ? "app dark-bg" : "app light-bg"}>
      
      {/* 🌙 TOP CENTER TOGGLE */}
      <button
        className="theme-toggle"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* CARD */}
      <div className="container">
        <h1>My Study Tasks</h1>

        <div className="controls">
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <div className="buttons">
            <button onClick={addTask}>Add Task</button>
            <button onClick={clearAllTasks}>Clear All</button>
          </div>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
