import Todo from "./Todo";

const TodoList = ({ todos, onComplate }) => { 
  const renderTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;

    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo} 
              onComplate={() => onComplate(todo.id)}
            />
          );
        })}
      </div>
    );
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
