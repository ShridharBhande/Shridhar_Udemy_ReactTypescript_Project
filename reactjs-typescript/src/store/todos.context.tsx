import React from "react";
import TODO from "../model/Todo";

const TodosContext = React.createContext<{
  items: TODO[];
  addTodo: () => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// const TodosContextProvider: React.FC = (props) => {
//     // Copy the code app.jsx file and use here 
// //   return <TodosContext.Provider> {props.children} </TodosContext.Provider>;
// };
