import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todo }) => (
  <div className="list-wrapper">
    {todos.map(todo => <TodoListItem todo={todo} />)}
  </div>
);

export default TodoList; 
