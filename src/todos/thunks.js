import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress()); 
    const resposne = await fetch('https://localhost:8080/todos');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure(todos));
    dispatch(displayAlert(e));
  }
};



export const displayAlert = text => () => {
  alert(text);
};