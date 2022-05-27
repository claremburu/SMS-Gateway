import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const purchasesService = {
  getPurchases,
};

function getPurchases(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/clients`,
    body,
    addHeaders(token)
  );
}

const baseUrl = process.env.BASE_URL;

export default purchasesService;
