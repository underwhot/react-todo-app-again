import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../UI/Button';
import './InputForm.scss';

const InputForm = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) {
      inputRef.current.focus();
      return;
    }

    addTodo({ id: uuidv4(), text: input.trim() });
    setInput('');
    inputRef.current.focus();
  };

  return (
    <div className="input">
      <form
        onSubmit={onSubmitHandler}
        action="#"
        className="input__form form-input card-main"
      >
        <input
          ref={inputRef}
          onChange={inputHandler}
          value={input}
          type="text"
          className="form-input__input"
          placeholder="Enter what todo here"
        />
        <Button type="submit">Add new todo</Button>
      </form>
    </div>
  );
};

export default InputForm;
