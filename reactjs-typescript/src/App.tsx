import { useState } from "react";
import "./App.css";
import Newtodo from "./components/Newtodo";
import Todos from "./components/Todos";
import TODO from "./model/Todo";

function App() {
  const [todos, setTodos] = useState<TODO[]>([]);

  const addTodoHandler = (todotext: string) => {
    const newTodo = new TODO(todotext);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <Newtodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
