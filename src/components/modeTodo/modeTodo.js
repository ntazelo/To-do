/* eslint-disable react/prop-types */
/* import { useState } from 'react/cjs/react.development'; */
import './modeTodo.css';

const Mode = (props) => {
/*  const [edit, setMode] = useState(''); */
  const {
    id, todo, mode, onEdit,
  } = props;
  const onChangeHandler = (e) => {
    onEdit(e.target.value, id);
  };
  const deleteTodo = () => {
    mode(id);
  };
  return (
    <li className="todo-cont">
      <input type="text" className="todo" value={todo} onChange={onChangeHandler} />
      <button type="button" onClick={deleteTodo} className="delete">&#128465;</button>
    </li>
  );
};

export default Mode;
