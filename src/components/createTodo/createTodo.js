/* eslint-disable react/prop-types */
import { useState } from 'react';
import './createTodo.css';

const CreateTodo = (props) => {
  const [todoType, onTypeTodo] = useState('');
  const { onSaveData } = props;

  const createTodoHandler = (e) => {
    e.preventDefault();
    onSaveData(todoType);
    onTypeTodo('');
  };

  const addTodo = (e) => {
    onTypeTodo(e.target.value);
  };

  return (

    <div className="container" onSubmit={createTodoHandler}>
      <form className="form-control">
        <input type="text" placeholder="Add a todo" value={todoType} onChange={addTodo} className="todo-field" />
        <button type="submit" className="btn-submit">+</button>
      </form>
    </div>
  );
};

export default CreateTodo;
