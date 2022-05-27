/* eslint-disable no-shadow */
import axios from 'axios';
import { Environment } from '../local/contents';
import { authConfig, config, exitIfUnauthenticated, setActionBusy } from '../local/utilities';

const baseUrl = Environment.apiUrl;

export const login = (email, password) => (dispatch) => {
  const body = {
    email,
    password
  };

  setActionBusy(dispatch, 'LOGIN_BUSY', true);

  axios
    .post(`${baseUrl}/auth/login`, body, config)
    .then((res) => {
      const { user } = res.data.data;
      const { token } = res.data.data;

      dispatch({ type: 'USER_LOGIN', user });
      dispatch({ type: 'USER_LOGIN_TOKEN', token });
      setActionBusy(dispatch, 'LOGIN_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'USER_LOGIN_ERROR', err });
      setActionBusy(dispatch, 'LOGIN_BUSY', false);
    });
};

export const register = (vals) => (dispatch) => {
  const body = {
    ...vals,
    phone: `0${vals.phone}`
  };

  setActionBusy(dispatch, 'REGISTER_BUSY', true);

  const err = null;
  dispatch({ type: 'USER_REGISTER_ERROR', err });

  axios
    .post(`${baseUrl}/auth/register`, body, config)
    .then((res) => {
      const { user } = res.data.data;
      dispatch({ type: 'USER_REGISTER', user });
      dispatch({ type: 'USER_LOGIN', user });
      setActionBusy(dispatch, 'REGISTER_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'USER_REGISTER_ERROR', err });
      setActionBusy(dispatch, 'REGISTER_BUSY', false);
    });
};

export const requestCode = (email) => (dispatch) => {
  const body = {
    email
  };

  setActionBusy(dispatch, 'RESET_BUSY', true);

  const err = null;
  dispatch({ type: 'USER_RESET_ERROR', err });

  axios
    .post(`${baseUrl}/auth/requestcode`, body)
    .then((res) => {
      const user = res.data;

      dispatch({ type: 'USER_RESET', user });
      setActionBusy(dispatch, 'RESET_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;

      dispatch({ type: 'USER_RESET_ERROR', err });
      setActionBusy(dispatch, 'RESET_BUSY', false);
    });
};

export const createPassword = (password, pvc) => (dispatch) => {
  const body = {
    password
  };

  setActionBusy(dispatch, 'RESET_BUSY', true);

  const err = null;
  dispatch({ type: 'USER_RESET_ERROR', err });

  axios
    .put(`${baseUrl}/auth/createpassword/${pvc}`, body)
    .then((res) => {
      const user = res.data;

      dispatch({ type: 'USER_RESET', user });
      setActionBusy(dispatch, 'RESET_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;

      dispatch({ type: 'USER_RESET_ERROR', err });
      setActionBusy(dispatch, 'RESET_BUSY', false);
    });
};

export const updateCredentials = (vals) => (dispatch, getState) => {
  const auth = getState().auth.token;

  const config = {
    headers: { Authorization: `Bearer ${auth}` }
  };

  const body = {
    ...vals
  };

  setActionBusy(dispatch, 'PASSWORD_BUSY', true);

  const err = null;
  dispatch({ type: 'USER_PASSWORD_ERROR', err });

  axios
    .put(`${baseUrl}/user/credentials`, body, authConfig(getState().auth?.token))
    .then((res) => {
      const info = res.data;

      setActionBusy(dispatch, 'PASSWORD_BUSY', false);
      dispatch({ type: 'USER_PASSWORD', info });
    })
    .catch((error) => {
      const err = error?.response?.data;

      setActionBusy(dispatch, 'PASSWORD_BUSY', false);
      dispatch({ type: 'USER_PASSWORD_ERROR', err });
    });
};

export const updatePackage = (userPackage, phoneNumber) => (dispatch, getState) => {
  const body = {
    package: userPackage,
    phoneNumber
  };

  setActionBusy(dispatch, 'PACKAGE_BUSY', true);

  const err = null;
  dispatch({ type: 'UPDATE_PACKAGE_ERROR', err });

  axios
    .put(`${baseUrl}/dashboard/package`, body, authConfig(getState().auth?.token))
    .then((res) => {
      const { user } = res.data.data;

      // dispatch({ type: 'UPDATE_PACKAGE', user });
      console.log('update user: ', user);
      setActionBusy(dispatch, 'PACKAGE_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'UPDATE_PACKAGE_ERROR', err });
      setActionBusy(dispatch, 'PACKAGE_BUSY', false);
      exitIfUnauthenticated(dispatch, err);
    });
};

export const logout = () => (dispatch, getState) => {
  const auth = getState().auth.token;

  setActionBusy(dispatch, 'LOGIN_BUSY', true);

  const config = {
    headers: {
      Authorization: `Bearer ${auth}`
    }
  };

  const err = null;
  dispatch({ type: 'USER_LOGOUT_ERROR', err });

  axios
    .delete(`${baseUrl}/logout`, config)
    .then(() => {
      dispatch({ type: 'USER_LOGOUT' });
      setActionBusy(dispatch, 'LOGIN_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;

      if (err?.message.search('Unauthenticated') !== -1) {
        // Was logged in on another app
        dispatch({ type: 'USER_LOGOUT' });
      }

      dispatch({ type: 'USER_LOGOUT_ERROR', err });
      setActionBusy(dispatch, 'LOGIN_BUSY', false);
    });
};
