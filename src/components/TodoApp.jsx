import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
