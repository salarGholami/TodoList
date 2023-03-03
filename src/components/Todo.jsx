const Todo = ({ todo, onComplate }) => {
  return (
    <div className="todo">
      <div className={todo.isCompleted ? "complate" : ""}>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onComplate}>Complate</button>
      </div>
    </div>
  );
};

export default Todo;
