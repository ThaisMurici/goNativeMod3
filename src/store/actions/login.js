export const loginRequest = username => ({
  type: 'LOGIN_REQUEST',
  payload: { username },
});
export const loginSuccess = username => ({
  type: 'LOGIN_SUCCESSS',
  payload: { username },
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
