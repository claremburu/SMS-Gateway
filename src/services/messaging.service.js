import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const messagingService = {
  sendMessages,
  getInboxMessages,
  getSentMessages,
};

const baseUrl = process.env.BASE_URL;

function sendMessages(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/jasmin/messaging:sendSMS`,
    body,
    addHeaders(token)
  );
}

function getInboxMessages(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/jasmin/messaging/messages/mo`,
    addGetHeader(token)
  );
}

function getSentMessages(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/jasmin/messaging/messages/mt`,
    addGetHeader(token)
  );
}

export default messagingService;
