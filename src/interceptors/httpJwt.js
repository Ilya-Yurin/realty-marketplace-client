import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';
import store from '../store';
import Auth from '../services';
import * as AUTH from '../store/actions/auth';
import * as LOADING from '../store/actions/loading';

export const onSuccess = (response) => {
  store.dispatch(LOADING.AUTH_SET_STATUS, false);

  return response;
};

export const onError = (error) => {
  if (error.response.status === 401) {
    const originalRequest = error.config;
    if (!originalRequest.isRetry && _.get(error.response, 'data.token_expired')) {
      originalRequest.isRetry = true;

      return Auth.refreshToken(store.getters.refreshToken).then((response) => {
        store.commit(AUTH.SET_ACCESS_TOKEN, response.token.access);
        return axios(originalRequest);
      }).catch((err) => {
        store.dispatch(AUTH.LOGOUT);
        return Promise.reject(err);
      });
    }
  }

  store.dispatch(LOADING.AUTH_SET_STATUS, false);

  return Promise.reject(error);
};

export const beforeRequestSuccess = (config) => {
  store.dispatch(LOADING.AUTH_SET_STATUS, false);
  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization = `Bearer ${store.getters.accessToken}`;
  return config;
};

export const beforeRequestError = (error) => {
  store.dispatch(LOADING.AUTH_SET_STATUS, false);
  return Promise.reject(error);
};
