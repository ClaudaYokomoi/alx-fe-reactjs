import React from 'react';
import "./App.css"
import TodoList from './components/TodoList';
import { TodoProvider } from './store/useTodo';


const App = () => {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;