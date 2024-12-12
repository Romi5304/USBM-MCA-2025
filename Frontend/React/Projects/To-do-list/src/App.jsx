
import "./app.css";

const App = () => {
  const [tasks, setTasks] = ([]);
  const inputRef =(null);

  // Add a new task
  const addTask = () => {
    const taskText = inputRef.current.value.trim();
    if (taskText) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      inputRef.current.value = ""; // Clear input field
      inputRef.current.focus(); // Automatically focus input field
    }
  };

  // Toggle task completion
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a new task..."
          className="input-field"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
        {tasks.length === 0 && <p>No tasks yet. Start adding some!</p>}
      </ul>
    </div>
  );
};

export default App;
