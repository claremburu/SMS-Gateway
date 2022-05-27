import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const smsService = {
  deliveryStats,
};

const baseUrl = process.env.BASE_URL;

function deliveryStats(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/sms:dailyDeliveryStats`,
    body,
    addHeaders(token)
  );
}

export default smsService;
