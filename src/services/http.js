import httpClient from './httpClient';

class http {
  constructor() {
    this.http = httpClient();
  }
  static get(url, params) {
    return this.http({method: 'GET', url, params});
  }
  static post(url, params) {
    return this.http({method: 'POST', url, params});
  }
}

export default http;