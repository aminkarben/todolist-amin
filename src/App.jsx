import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import { useState } from "react";
import localData from "./data/data.json";
import { useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState(localData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const newFilteredTodos = todos.filter((todo) => {
      return todo.task.toLocaleLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredTodos(newFilteredTodos);
  }, [todos, searchQuery]);

  const handleAddTodo = (task) => {
    const newTodo = [
      ...todos,
      {
        id: +new Date(),
        task,
        completed: false,
      },
    ];

    setTodos(newTodo);
  };

  const handleEditTodo = (id, task) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, task } : todo;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const handleSearchTodo = (query) => {
    setSearchQuery(query);
  };

  const handleDeleteAllTodo = () => {
    const confirmed = window.confirm("Delete all tasks?");
    if (confirmed) setTodos([]);
  };

  const handleDeleteDoneTodo = () => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  };

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <Home
              todos={filteredTodos}
              onEditTodo={handleEditTodo}
              onDeleteTodo={handleDeleteTodo}
              onSearchTodo={handleSearchTodo}
              onCompletedTodo={handleToggleCompleted}
              onDeleteAllTodo={handleDeleteAllTodo}
              onDeleteDoneTodo={handleDeleteDoneTodo}
            />
          ),
        },
        {
          path: "/add-todo",
          element: <AddTodo onAddTodo={handleAddTodo} />,
        },
      ])}
    />
  );
}
