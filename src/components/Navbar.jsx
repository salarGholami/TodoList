import { useState } from "react";

const Navbar = ({ unCompletedTodo, filterTodos }) => {
  const [status, setStatus] = useState("All");

  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  if (!unCompletedTodo) return <h2>set your tody todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span> <h2>todos are not completed</h2>
      <select onChange={changeHandler} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="unCompleted">unCompleled</option>
      </select>
    </header>
  );
};

export default Navbar;
