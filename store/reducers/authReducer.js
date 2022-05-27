// eslint-disable default-param-last 
const initialState = {
  user: {},
  err: null,
  token: null,
  busy: false,
  info: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_BUSY':
      return { ...state, busy: action.busy };
    case 'REGISTER_BUSY':
      return { ...state, busy: action.busy };
    case 'RESET_BUSY':
      return { ...state, busy: action.busy };
    case 'PACKAGE_BUSY':
      return { ...state, busy: action.busy };
    case 'PASSWORD_BUSY':
      return { ...state, busy: action.busy, info: null };
    case 'AVATAR_BUSY':
      return { ...state, busy: action.busy, info: null };
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.user,
        justRegistered: false,
        loginErr: null
      };
    case 'USER_UPDATE':
      return {
        ...state,
        user: action.user,
        packageErr: null
      };
    case 'USER_LOGIN_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'USER_REGISTER':
      return {
        ...state,
        justRegistered: true,
        registerErr: null
      };
    case 'USER_VERIFY_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          email: {
            ...state.user.email,
            verified: true
          }
        },
        packageErr: null
      };
    case 'USER_RESET':
      return {
        ...state,
        resetErr: null
      };
    case 'UPDATE_PACKAGE':
      return {
        ...state,
        user: action.user,
        updateErr: null
      };
    case 'USER_PASSWORD':
      return {
        ...state,
        passwordErr: null,
        info: action.info
      };
    case 'USER_AVATAR':
      return {
        ...state,
        avatarErr: null,
        avatarInfo: action.info,
        user: action.info.data
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        logoutErr: null,
        user: {},
        token: null
      };
    case 'USER_LOGIN_ERROR':
      return { ...state, user: {}, loginErr: action.err, token: null };
    case 'USER_REGISTER_ERROR':
      return { ...state, user: {}, registerErr: action.err, token: null };
    case 'USER_RESET_ERROR':
      return { ...state, user: {}, resetErr: action.err, token: null };
    case 'UPDATE_PACKAGE_ERROR':
      return { ...state, packageErr: action.err };
    case 'USER_PASSWORD_ERROR':
      return { ...state, passwordErr: action.err };
    case 'USER_AVATAR_ERROR':
      return { ...state, avatarErr: action.err };
    case 'USER_LOGOUT_ERROR':
      return { ...state, logoutErr: action.err };
    default:
      return { ...state };
  }
}
