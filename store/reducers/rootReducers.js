import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';

const appReducer = combineReducers({
  auth: authReducer,
  data: dashboardReducer
});

export default appReducer;