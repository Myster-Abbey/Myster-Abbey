import React, { useState, useRef } from "react";

// App Component
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { name: inputValue, completed: false }]);
      setInputValue("");
      inputRef.current.focus();
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            completed={task.completed}
            onToggle={() => toggleTaskCompletion(index)}
          />
        ))}
      </ul>
    </div>
  );
}

// Task Component
function Task({ name, completed, onToggle }) {
  return (
    <li>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {name}
      </span>
      <button onClick={onToggle}>
        {completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
}

export default App;