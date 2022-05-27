import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const jasminService = {
  jasminGroups,
  deleteJasminGroup,
  addJamsinGroup,
  jasminUsers,
  deleteJasminUsers,
  addJasminUser,
  jasminSmppProviders,
  getJasminSmppProviderDetails,
  deleteJasminSmppProviders,
  addJasminSmppProvider,
  startJasminSmppProvider,
  stopJasminSmppProvider,
};

const baseUrl = process.env.BASE_URL;

// Jasmin Groups
function jasminGroups(token, clientId) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/jasmin/groups?filter.clientIds=${clientId}`,

    addGetHeader(token)
  );
}

function deleteJasminGroup(groupId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/jasmin/groups/${groupId}`,
    addGetHeader(token)
  );
}

function addJamsinGroup(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/jasmin/groups`,
    body,
    addHeaders(token)
  );
}

// Jasmin Users
function jasminUsers(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/jasmin/users`,

    addGetHeader(token)
  );
}

function deleteJasminUsers(userId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/jasmin/users/${userId}`,
    addGetHeader(token)
  );
}

function addJasminUser(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/jasmin/users`,
    body,
    addHeaders(token)
  );
}

// Jasmin SMPP providers
function jasminSmppProviders(token, clientId) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/jasmin/smpp-providers?filter.clientIds=${clientId}`,

    addGetHeader(token)
  );
}

function getJasminSmppProviderDetails(smppProviderId, token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/jasmin/smpp-providers/${smppProviderId}`,
    addGetHeader(token)
  );
}

function deleteJasminSmppProviders(smppProviderId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/jasmin/smpp-providers/${smppProviderId}`,
    addGetHeader(token)
  );
}

function addJasminSmppProvider(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/jasmin/smpp-providers`,
    body,
    addHeaders(token)
  );
}

function startJasminSmppProvider(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/jasmin/smpp-providers:startClient `,
    body,
    addHeaders(token)
  );
}

function stopJasminSmppProvider(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/jasmin/smpp-providers:stopClient `,
    body,
    addHeaders(token)
  );
}

export default jasminService;
