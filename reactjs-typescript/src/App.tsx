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

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <Newtodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
