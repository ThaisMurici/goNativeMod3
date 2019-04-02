export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: { text },
});

export const markAsCompleted = id => ({
  type: 'MARK_AS_COMPLETED',
  payload: { id },
});
