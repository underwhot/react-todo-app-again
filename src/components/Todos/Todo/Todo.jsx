import { MdDelete } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import Button from '../../UI/Button';
import './Todo.scss';

const Todo = ({ className, children, id, deleteTodo }) => {
  return (
    <li className={`${className} todo-list__item_btns `}>
      <p>{children}</p>
      <div className="todo-list__actions">
        {/* <Button type="button" className="button_icon done">
          <BsCheckLg></BsCheckLg>
        </Button> */}
        <Button onClick={() => deleteTodo(id)} type="button" className="button_icon delete">
          <MdDelete></MdDelete>
        </Button>
      </div>
    </li>
  );
};

export default Todo;
