const Todo = ({ todo, onComplate, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div onClick={onComplate} className={todo.isCompleted ? "complate" : ""}>
        {todo.text}
      </div>
      <div>
        <button className="btnEdit" onClick={onEdit}>
          Edit
        </button>
        <button className="btnRemove" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
