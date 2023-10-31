import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import TodosList from './components/Todos/TodosList/TodosList';

import './App.css';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Header></Header>
      <main className="card-main">
        <TodosList todos={todos} deleteTodo={deleteTodoHandler}></TodosList>
        <InputForm addTodo={addTodoHandler}></InputForm>
      </main>
    </div>
  );
}

export default App;
