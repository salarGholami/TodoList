const Navbar = ({ unCompletedTodo, onSelect, status }) => {
  if (!unCompletedTodo) return <h2>set your tody todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span> <h2>todos are not completed</h2>
      <select className="select" onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="unCompleted">unCompleled</option>
      </select>
    </header>
  );
};

export default Navbar;
