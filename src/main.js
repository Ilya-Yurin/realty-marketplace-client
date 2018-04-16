import Vue from 'vue';
import Vuetify from 'vuetify';
import HTTP from './services/http-common';

import App from './App';
import router from './router';
import store from './store/';
import { onSuccess, onError, beforeRequestSuccess, beforeRequestError } from './interceptors/httpJwt';

HTTP.interceptors.request.use(beforeRequestSuccess, beforeRequestError);
HTTP.interceptors.response.use(onSuccess, onError);

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
