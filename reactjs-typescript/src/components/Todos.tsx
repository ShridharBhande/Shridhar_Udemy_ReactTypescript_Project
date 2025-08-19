import React from "react";
import TODO from "../model/Todo";
import Todotext from "./Todotext";

const Todos: React.FC<{items: TODO[]}> = (props) => {
    return(
        <ul>
            {props.items.map((item) => (
                <Todotext key={item.id} text={item.text}/>
            ))}
        </ul>
    )
}

export default Todos;