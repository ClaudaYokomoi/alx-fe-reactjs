// src/TodoList.js
import React from 'react';
import { useTodo } from './TodoContext';

const TodoList = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
  const [newTodoText, setNewTodoText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    addTodo(newTodoText);
    setNewTodoText('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;