import TodoDeleteAction from "../components/TodoDeleteAction";
import TodoActionCenter from "../components/TodoActionCenter";
import TodoFilter from "../components/TodoFilter";
import Layout from "../layouts/Layout";
import TodoList from "../components/TodoList";
import { useState } from "react";

export default function Home({
  todos,
  onEditTodo,
  onDeleteTodo,
  onSearchTodo,
  onDeleteAllTodo,
  onCompletedTodo,
  onDeleteDoneTodo,
}) {
  const [queryParams, setQueryParams] = useState("all");

  const handleFiltered = (e) => {
    setQueryParams(e.target.value);
  };

  let filteredTodoByParams;
  if (queryParams === "all") {
    filteredTodoByParams = todos;
  } else if (queryParams === "done") {
    filteredTodoByParams = todos.filter((todo) => todo.completed);
  } else {
    filteredTodoByParams = todos.filter((todo) => !todo.completed);
  }

  return (
    <Layout>
      <TodoActionCenter onSearchTodo={onSearchTodo} />
      <TodoFilter onFilteredTodo={handleFiltered} />
      {todos.length > 0 ? (
        <div className="space-y-4 mt-10">
          {filteredTodoByParams?.map((todo) => {
            return (
              <div key={todo.id}>
                <TodoList
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  completed={todo.completed}
                  onEditTodo={onEditTodo}
                  onDeleteTodo={onDeleteTodo}
                  onCompletedTodo={onCompletedTodo}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="my-10">
          <h1 className="flex items-center justify-center font-bold text-2xl text-red-500 italic">
            Not Found ( Tidak ada kata yang tersedia )
          </h1>
        </div>
      )}
      <TodoDeleteAction
        onDeleteAllTodo={onDeleteAllTodo}
        onDeleteDoneTodo={onDeleteDoneTodo}
      />
    </Layout>
  );
}
