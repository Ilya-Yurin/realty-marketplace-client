import Promise from 'bluebird';
import _ from 'lodash';
import HTTP from './http-common';

const AUTH_URI = 'http://localhost:3000/api/v1/auth';

class AuthService {
  constructor(http, uri) {
    this.http = http;
    this.uri = uri;
  }

  register(data) {
    return this.http.post(`${this.uri}/registrations`, data)
      .then(response => _.get(response, 'data'))
      .catch(error => Promise.reject(error));
  }

  login(credentials) {
    return this.http.post(`${this.uri}/login`, credentials)
      .then(response => _.get(response, 'data'))
      .catch(error => Promise.reject(error));
  }

  refreshToken(token) {
    return this.http.post(`${this.uri}/login`, { token })
      .then(response => _.get(response, 'data'))
      .catch(error => Promise.reject(error));
  }

  getSelf() {
    return this.http.get(`${this.uri}/self`)
      .then(response => _.get(response, 'data'))
      .catch(error => Promise.reject(error));
  }

  updateProfile(data) {
    return this.http.patch(`${this.uri}/profile`, data)
      .then(response => _.get(response, 'data'))
      .catch(error => Promise.reject(error));
  }
}

export default new AuthService(HTTP, AUTH_URI);
