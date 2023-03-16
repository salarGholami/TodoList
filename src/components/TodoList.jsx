import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplate, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = () => {
    onUpdateTodo(edit.id);
  };

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
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })} 
      </div>
    );
  };

  return (
    <div>{edit.id ? <TodoForm submitTodo={editTodo} /> : renderTodos()}</div>
  );
};

export default TodoList;
