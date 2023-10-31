import Todo from '../Todo/Todo';
import './TodosList.scss';

const TodosList = ({ todos, deleteTodo }) => {
  const noTodos = (
    <li className="todo-list__empty" >
      Todos not found
    </li>
  );

  return (
    <ul className="todo-list">
      {/* {noTodos} */}
      {todos.length === 0
        ? noTodos
        : todos.map((todo) => (
            <Todo deleteTodo={deleteTodo} id={todo.id} key={todo.id} className="todo-list__item">
              {todo.text}
            </Todo>
          ))}
    </ul>
  );
};

export default TodosList;
