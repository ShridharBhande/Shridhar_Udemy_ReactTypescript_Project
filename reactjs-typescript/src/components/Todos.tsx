import React from "react";
import TODO from "../model/Todo";
import Todotext from "./Todotext";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: TODO[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return ( 
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Todotext key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
