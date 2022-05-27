import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/FetchWrapper";

const authService = {
  defaultJwt,
  login,
  register,
  requestChangePassword,
  updatePasswordExternal
};

const baseUrl = process.env.REACT_APP_API_URL;

function defaultJwt() {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/auth:defaultJwt`,
  );
}

function login(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/clients:signIn`,
    body,
    addHeaders(token)
  );
}

function register(body, token) {
  return fetchWrapper.post(`${baseUrl}onfonapps/clients`, body, addHeaders(token));
}

function requestChangePassword(body, token) {
  return fetchWrapper.post(`${baseUrl}onfonapps/clients:requestChangePassword`, body, addHeaders(token));
}

function updatePasswordExternal(body, token) {
  return fetchWrapper.post(`${baseUrl}onfonapps/clients:updatePasswordExternal`, body, addHeaders(token));
}


export default authService;
