import axios from 'axios';

const BASE_URL = 'https://auto1-mock-server.herokuapp.com/';

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  },
});

const http = {
  get: (url, params) => httpClient.get(url, params),
  post: (url, params) => httpClient.post(url, params),
}

export default http;