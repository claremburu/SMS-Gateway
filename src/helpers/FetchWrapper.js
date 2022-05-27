// import Router from "next/router";

import { useNavigate } from "react-router-dom"

export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: _delete,
};

function addContentType() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return headers;
}

export default function addHeaders(token) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  return headers;
}

export function addGetHeader(token) {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  return headers;
}

async function get(url, headers) {
  if (!headers) {
    headers = addContentType();
  }

  const requestOptions = {
    method: "GET",
    headers,
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

async function post(url, body, headers) {
  // let myHeaders = new Headers();
  // myHeaders.append("Access-Control-Allow-Origin" , "*");

  if (!headers) {
    headers = addContentType();
  }

  if (body != null) {
    body = JSON.stringify(body);
  }

  const requestOptions = {
    method: "POST",
    body,
    headers,
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

async function put(url, body, headers) {
  if (!headers) {
    headers = addContentType();
  }
  const requestOptions = {
    method: "PUT",
    body: JSON.stringify(body),
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

async function patch(url, body, headers) {
  if (!headers) {
    headers = addContentType();
  }
  const requestOptions = {
    method: "PATCH",
    body: JSON.stringify(body),
    headers,
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url, headers) {
  if (!headers) {
    headers = addContentType();
  }
  const requestOptions = {
    method: "DELETE",
    headers,
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

// helper functions
function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (text.includes("Unauthenticated")) {
      const navigate = useNavigate();
      navigate("/login", { replace: true });
    }

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }

    return data;
  });
}
