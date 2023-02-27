import { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={todo} onChange={changeHandler} />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoForm;
