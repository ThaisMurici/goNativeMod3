import { createStore } from 'redux';

function reducer() {
  return ['Fazer café', 'Estudar React Native'];
}

const store = createStore(reducer);

export default store;
