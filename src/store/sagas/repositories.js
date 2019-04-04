import { select, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import * as RepositoriesActions from '~/store/actions/repositories';

export default function* repositories() {
  try {
    const { username } = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}
