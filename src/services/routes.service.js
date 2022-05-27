import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const routesService = {
  routeFilters,
  routeFiltersDetails,
  deleteRouteFilter,
  addRouteFilter,
  routes,
  routesDetails,
  deleteRoute,
  addRoute,
  suppliers,
  supplierDetails,
  deleteSupplier,
  addSupplier,
  updateSupplier
};

const baseUrl = process.env.BASE_URL;

function routeFilters(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/route-filters`,

    addGetHeader(token)
  );
}

function routeFiltersDetails(token, filterId) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/route-filters/${filterId}`,

    addGetHeader(token)
  );
}

function deleteRouteFilter(token, filterId) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/route-filters/${filterId}`,

    addGetHeader(token)
  );
}

function addRouteFilter(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/routes-filters`,
    body,
    addHeaders(token)
  );
}

function routes(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/routes`,

    addGetHeader(token)
  );
}

function routesDetails(token, routeId) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/routes/${routeId}`,

    addGetHeader(token)
  );
}

function deleteRoute(token, routeId) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/routes/${routeId}`,

    addGetHeader(token)
  );
}

function addRoute(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/routes`,
    body,
    addHeaders(token)
  );
}

function suppliers(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/suppliers`,

    addGetHeader(token)
  );
}

function supplierDetails(token, supplierId) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/suppliers/${supplierId}`,

    addGetHeader(token)
  );
}

function deleteSupplier(token, supplierId) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/suppliers/${supplierId}`,

    addGetHeader(token)
  );
}

function addSupplier(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/routes/suppliers`,
    body,
    addHeaders(token)
  );
}

function updateSupplier(body, supplierId,token) {
  return fetchWrapper.patch(`${baseUrl}onfonapps/suppliers/${supplierId}`,
    body,
    addHeaders(token)
  );
}

export default routesService;
