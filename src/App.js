import { useState } from 'react/cjs/react.development';
import CreateTodo from './components/createTodo/createTodo';
import ListTodos from './components/listTodos/listTodos';

const App = () => {
  const [data, setData] = useState([]);
  const addTodo = (todo) => {
    if (todo.length === 0) {
      return;
    }

    const atodo = {
      id: Math.floor(Math.random() * 100000),
      todo,
    };
    const todos = [atodo, ...data];
    setData(todos);
  };

  const savechanges = (id) => {
    const number = Number(id);
    const mode = data.filter((dat) => dat.id !== number);
    setData(mode);
  };

  const edit = (dat, id) => {
    const number = Number(id);
    const objIndex = data.findIndex((todo) => todo.id === number);
    data[objIndex].todo = dat;
    const clone = [...data];
    setData(clone);
  };

  return (
    <>
      <CreateTodo onSaveData={addTodo} />
      <ListTodos todos={data} changes={savechanges} onType={edit} />
    </>
  );
};

export default App;
