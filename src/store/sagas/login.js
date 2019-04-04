import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { navigate } from '~/services/navigation';
import { Creators as LoginActions } from '~/store/ducks/login';

export default function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `users/${username}`);
    yield put(LoginActions.loginSuccess(username));

    navigate('Repositories');
  } catch (error) {
    yield put(LoginActions.loginFailure());
  }
}
