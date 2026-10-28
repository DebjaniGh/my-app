import { useState } from "react";

export function TodoState() {
  const [todos, setTodos] = useState([
    { id: 1234, desc: "buy milk", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function addTodo() {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), desc: newTask, done: false },
    ]);
    setNewTask("");
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "none",
              }}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.desc}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
}
