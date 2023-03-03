import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const complateTodo = (id) => {
    //item => findIndex() => clone =>
    const index = todos.findIndex((todo) => todo.id === id);
    //clone : DO NOT MUTATE
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    //clone : todos :
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplate={complateTodo} />
    </div>
  );
};

export default TodoApp;
