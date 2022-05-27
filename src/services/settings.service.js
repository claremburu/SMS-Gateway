import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const settingsService = {
  getLbna,
  getLbnaDetails,
  addLbna,
  deleteLbna,
};

function getLbna(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/jasmin/lbna`,
    addGetHeader(token)
  );
}

function getLbnaDetails(clientLbnaId, token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/lbna/${clientLbnaId}`,
    addGetHeader(token)
  );
}

function deleteLbna(clientLbnaId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/lbna/${clientLbnaId}`,
    addGetHeader(token)
  );
}

function addLbna(body, token) {
  return fetchWrapper.post(`${baseUrl}onfonapps/lbna`, body, addHeaders(token));
}

const baseUrl = process.env.BASE_URL;

export default settingsService;
