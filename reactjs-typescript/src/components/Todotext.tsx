import React from "react";

const Todotext: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default Todotext;
