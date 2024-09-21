export const CREATE_TODO = 'CREATE_TODO';
export const creatTodo = text => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO'; 
export const remove_todo = text => ({
  type: REMOVE_TODO,
  playload: { text },
});