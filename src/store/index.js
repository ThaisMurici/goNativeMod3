import { createStore } from 'redux';

// Reducer
const INITIAL_STATE = ['Fazer café', 'Estudar React Native', 'Entender o Redux'];

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }
  return INITIAL_STATE;
}

const store = createStore(reducer);

export default store;
