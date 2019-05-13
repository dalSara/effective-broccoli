import analytics from './analytics';
import getData from '@creuna/utils/get-data';
import messenger from './messenger';

const defaultFetchOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
};

function parseResponse(response) {
  return response.json().then(json => ({ json, response }));
}

function handleUserMessages({ json, response }) {
  if (json.messageToUser) {
    if (json.success) {
      messenger.sendMessage({ message: json.messageToUser });
    } else {
      messenger.sendErrorMessage({ message: json.messageToUser });
    }
  }

  return { json, response };
}

function handleAnalytics({ json, response }) {
  if (json.analytics) {
    analytics.send(json.analytics);
  }

  return { json, response };
}

function handleNotOk({ json, response }) {
  // NOTE: `response.ok` is true when the returned status is in the inclusive range 200-299.
  if (!response.ok && !json.messageToUser) {
    const error = new Error(response.statusText);

    error.name = `${response.status} on ${response.url}`;

    throw error;
  }

  return { json, response };
}

function handleResponse({ json }) {
  return json.payload || json;
}

function handleFetchError(error) {
  messenger.sendErrorMessage({
    message:
      getData('generic-error-message') ||
      'Noe gikk galt. Vennligst prøv igjen senere.'
  });

  return Promise.reject(error);
}

function request(url, options) {
  return fetch(url, options)
    .then(parseResponse)
    .then(handleUserMessages)
    .then(handleAnalytics)
    .then(handleNotOk)
    .then(handleResponse)
    .catch(handleFetchError);
}

function post(endpoint, data) {
  return request(
    endpoint,
    Object.assign({}, defaultFetchOptions, {
      body: data,
      method: 'post'
    })
  );
}

function get(endpoint) {
  return request(endpoint, defaultFetchOptions);
}

function execute(endpoint, data) {
  if (endpoint.indexOf('/static-site/api') !== -1) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(request(endpoint, defaultFetchOptions));
      }, 1000);
    });
  }

  return post(endpoint, JSON.stringify(data));
}

export default {
  execute,
  get
};
