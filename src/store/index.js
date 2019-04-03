import { createStore, compose } from 'redux';

import reducers from '~/store/reducers';

const tronMiddleware = __DEV__ ? console.tron.createEnhancer : () => {};

const store = createStore(reducers, compose(tronMiddleware()));

export default store;
