import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import { getTodosLoading, getIncompleteTodos, getCompletedTodos } from "./selectors";
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";

const TodoList = ({ completedTodos, getIncompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, [startLoadingTodos]);  
  
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div>
      <h3>Incomplete:</h3>
      {getIncompleteTodos && getIncompleteTodos.map(todo => (
        <TodoListItem 
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed} 
        />
      ))}
      <h3>Completed</h3>
      {completedTodos && completedTodos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  getIncompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 
