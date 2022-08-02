import React, { Component } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ol className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            id={todo.id}
            todo={todo}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
