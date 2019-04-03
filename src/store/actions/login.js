export const loginSuccess = username => ({
  type: 'LOGIN_SUCCESSS',
  payload: { username },
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
