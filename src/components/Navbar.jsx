const Navbar = ({ unCompletedTodo }) => {
  if (!unCompletedTodo) return <h2>set your tody todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span>
    </header>
  );
};

export default Navbar;
