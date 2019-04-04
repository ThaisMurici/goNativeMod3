import { all, takeLatest } from 'redux-saga/effects';

import login from './login';
import repositories from './repositories';

import { Types as LoginTypes } from '~/store/ducks/login';
import { Types as RepositoriesTypes } from '~/store/ducks/repositories';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(RepositoriesTypes.REQUEST, repositories),
  ]);
}
