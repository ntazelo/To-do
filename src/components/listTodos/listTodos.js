/* eslint-disable react/prop-types */
import Mode from '../modeTodo/modeTodo';
import './listTodos.css';

const ListTodos = (props) => {
  const { todos, changes, onType } = props;
  const mode = (data) => {
    changes(data);
  };
  const edit = (todo, id) => {
    onType(todo, id);
  };

  return (
    <ul className="todos-cont">
      {todos.map((todo) => (
        <Mode
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          mode={mode}
          onEdit={edit}
        />
      ))}
    </ul>
  );
};

export default ListTodos;
