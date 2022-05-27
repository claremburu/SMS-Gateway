export const config = {
  headers: {
    Accept: 'application/json'
  }
};

export const authConfig = (token) => ({
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export const setActionBusy = (dispatch, type, busy) => {
  dispatch({ type, busy });
};

export const exitIfUnauthenticated = (dispatch, err) => {
  const user = {};
  if (err?.error === 'Unauthenticated.') {
    dispatch({ type: 'USER_LOGIN', user });
  }
};
