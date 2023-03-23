export const httpRequest = async params => {
  const {url, method, body = null} = params;
  let reqHeader = {'Content-Type': 'application/json'};
  let reqOptions = {
    method: method,
    headers: reqHeader,
  };

  return fetch(url, reqOptions);
};
