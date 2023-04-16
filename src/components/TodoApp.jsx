import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
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

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        return setFilteredTodos(todos.filter((t) => t.isCompleted));
      case "unCompleted":
        return setFilteredTodos(todos.filter((t) => !t.isCompleted));
      default:
        setFilteredTodos(todos);
    }
  };
  return (
    <div className="container"> 
      <Navbar
        unCompletedTodo={todos.filter((t) => !t.isCompleted).length}
        filterTodos={filterTodos}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplate={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
