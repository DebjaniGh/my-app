import { useReducer, useState } from "react";

function todoReducer(state, action) {
  const type = action.type;

  switch (type) {
    case "ADD":
      return [...state, { id: Date.now(), desc: action.desc, done: false }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return state;
  }
}

export function TodoReducer() {
  const [newTask, setNewTask] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  function handleAdd() {
    dispatch({ type: "ADD", desc: newTask });
    setNewTask("");
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
              onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
            >
              {todo.desc}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch({ type: "DELETE", id: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
