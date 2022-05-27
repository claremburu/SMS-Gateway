/* eslint-disable no-shadow */
import axios from 'axios';
import { Environment } from '../local/contents';
import { authConfig, exitIfUnauthenticated, setActionBusy } from '../local/utilities';

const baseUrl = Environment.apiUrl;

export const getListInfo = (endpoint) => (dispatch, getState) => {
  setActionBusy(dispatch, 'LIST_BUSY', true);
  axios
    .get(`${baseUrl}/${endpoint}?page=1&limit=50`, authConfig(getState().auth?.token))
    .then((res) => {
      const list = {
        name: endpoint,
        data: res.data.data.results
      };
      dispatch({ type: 'GET_LIST', list });
      setActionBusy(dispatch, 'LIST_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'GET_LIST_ERROR', err });
      setActionBusy(dispatch, 'LIST_BUSY', false);
      exitIfUnauthenticated(dispatch, err);
    });
};

export const addWithdrawal = (amount, type) => (dispatch, getState) => {
  setActionBusy(dispatch, 'WITHDRAWAL_BUSY', true);
  axios
    .post(`${baseUrl}/withdraw`, { amount, type }, authConfig(getState().auth?.token))
    .then((res) => {
      const info = res.data.data;
      dispatch({ type: 'ADD_WITHDRAWAL', info });
      setActionBusy(dispatch, 'WITHDRAWAL_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'ADD_WITHDRAWAL_ERROR', err });
      setActionBusy(dispatch, 'WITHDRAWAL_BUSY', false);
      exitIfUnauthenticated(dispatch, err);
    });
};

export const addDeposit = (investableAmount, from) => (dispatch, getState) => {
  setActionBusy(dispatch, 'DEPOSIT_BUSY', true);
  axios
    .post(`${baseUrl}/deposit`, { investableAmount, from }, authConfig(getState().auth?.token))
    .then((res) => {
      const info = res.data.data;
      dispatch({ type: 'ADD_DEPOSIT', info });
      setActionBusy(dispatch, 'DEPOSIT_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'ADD_DEPOSIT_ERROR', err });
      setActionBusy(dispatch, 'DEPOSIT_BUSY', false);
      exitIfUnauthenticated(dispatch, err);
    });
};

export const getDashboardInfo = () => (dispatch, getState) => {
  setActionBusy(dispatch, 'DASH_BUSY', true);
  axios
    .get(`${baseUrl}/dashboard`, authConfig(getState().auth?.token))
    .then((res) => {
      const dash = res.data.data;
      dispatch({ type: 'GET_DASH', dash });
      setActionBusy(dispatch, 'DASH_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'GET_DASH_ERROR', err });
      setActionBusy(dispatch, 'DASH_BUSY', false);
      exitIfUnauthenticated(dispatch, err);
    });
};

export const getProfileInfo = () => (dispatch, getState) => {
  setActionBusy(dispatch, 'PROFILE_BUSY', true);
  axios
    .get(`${baseUrl}/dashboard/profile`, authConfig(getState().auth?.token))
    .then((res) => {
      const profile = res.data.data.newUser;
      const user = profile;
      dispatch({ type: 'GET_PROFILE', profile });
      dispatch({ type: 'USER_LOGIN', user }); // update user to login
      setActionBusy(dispatch, 'PROFILE_BUSY', false);
    })
    .catch((error) => {
      const err = error?.response?.data;
      dispatch({ type: 'GET_PROFILE_ERROR', err });
      setActionBusy(dispatch, 'PROFILE_BUSY', false);
      exitIfUnauthenticated(dispatch, err);
    });
};
