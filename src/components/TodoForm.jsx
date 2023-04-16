import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Enter Todo!");
      return;
    }
    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formcontrol">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "update" : "add something"}
          ref={inputRef}
        />
        <button className={props.edit ? "updatetodo" : "addtodo"} type="submit">
          {props.edit ? "update" : "add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
