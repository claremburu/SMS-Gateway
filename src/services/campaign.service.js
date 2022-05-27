import addHeaders, {
  addGetHeader,
  fetchWrapper,
} from "../helpers/fetch-wrapper";

const campaignService = {
  getCampaigns,
  deleteCampaign,
  addCampaign,
  uploadTargetMarketList,
  getContacts,
  getContactDetails,
  addContact,
  updateContact,
  deleteContact,
  getContactGroups,
  addContactGroups,
  updateContactGroups,
  deleteContactGroups,
  getMessageTemplates,
  addMessageTemplates,
  updateMessageTemplates,
  deleteMessageTemplates,
};

const baseUrl = process.env.BASE_URL;

// Campaigns
function addCampaign(body,token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/campaigns/campaigns`,
    body,
    addHeaders(token)
  );
}

function getCampaigns(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/campaigns/campaigns`,
    addGetHeader(token)
  );
}

function deleteCampaign(campaignId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/campaigns/campaigns/${campaignId}`,
    addGetHeader(token)
  );
}

function uploadTargetMarketList(campaignId, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/campaigns/campaigns/${campaignId}`,
    addGetHeader(token)
  );
}

// Contacts
function getContacts(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/campaigns/contacts`,
    addGetHeader(token)
  );
}

function addContact(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/campaigns/contacts`,
    body,
    addHeaders(token)
  );
}

function getContactDetails(token, contactId) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/campaigns/contacts/${contactId}`,
    addHeaders(token)
  );
}

function updateContact(body, token, contactId) {
  return fetchWrapper.patch(
    `${baseUrl}onfonapps/campaigns/contacts/${contactId}`,
    body,
    addHeaders(token)
  );
}

function deleteContact(contactId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/campaigns/contacts/${contactId}`,
    addGetHeader(token)
  );
}

// Contact Groups
function getContactGroups(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/campaigns/groups`,
    addGetHeader(token)
  );
}

function addContactGroups(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/campaigns/groups`,
    body,
    addHeaders(token)
  );
}

function updateContactGroups(body, token, groupId) {
  return fetchWrapper.patch(
    `${baseUrl}onfonapps/campaigns/groups/${groupId}`,
    body,
    addHeaders(token)
  );
}

function deleteContactGroups(groupId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/campaigns/groups/${groupId}`,
    addGetHeader(token)
  );
}

// Message templates
function getMessageTemplates(token) {
  return fetchWrapper.get(
    `${baseUrl}onfonapps/campaigns/messagetemplates`,
    addGetHeader(token)
  );
}

function addMessageTemplates(body, token) {
  return fetchWrapper.post(
    `${baseUrl}onfonapps/campaigns/messagetemplates`,
    body,
    addHeaders(token)
  );
}

function updateMessageTemplates(body, token, templateId) {
  return fetchWrapper.patch(
    `${baseUrl}onfonapps/campaigns/messagetemplatestemplates/${templateId}`,
    body,
    addHeaders(token)
  );
}

function deleteMessageTemplates(templateId, token) {
  return fetchWrapper.delete(
    `${baseUrl}onfonapps/campaigns/messagetemplates/${templateId}`,
    addGetHeader(token)
  );
}

export default campaignService;
