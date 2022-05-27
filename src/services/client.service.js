import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const clientService = {
  getClients,
  deleteClient,
  getClientDetails,
  addClient,
  updateClient,
  updatePassword
};

const baseUrl = process.env.BASE_URL;

function getClients(token) {
  return fetchWrapper.get(`${baseUrl}onfonapps/clients`, addGetHeader(token));
}

function deleteClient(clientId,token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/clients/${clientId}`,
    addGetHeader(token)
  );
}

function getClientDetails(token, clientId) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/clients/${clientId}`,
    addGetHeader(token)
  );
}

function addClient(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/clients`,
    body,
    addGetHeader(token)
  );
}

function updateClient(body, token) {
  return fetchWrapper.patch(
    `${baseUrl}onfonapps/clients:updateClientField`,
    body,
    addGetHeader(token)
  );
}

function updatePassword(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/clients:updatePassword`,
    body,
    addGetHeader(token)
  );
}




export default clientService;
