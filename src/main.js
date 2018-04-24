import Vue from 'vue';
import Vuetify from 'vuetify';
import GoogleAuth from 'vue-google-oauth';

import HTTP from './services/http-common';
import App from './App';
import router from './router';
import store from './store/';
import { onSuccess, onError, beforeRequestSuccess, beforeRequestError } from './interceptors/httpJwt';

HTTP.interceptors.request.use(beforeRequestSuccess, beforeRequestError);
HTTP.interceptors.response.use(onSuccess, onError);
Vue.use(GoogleAuth, { client_id: '716918042232-od1f4094krf0ri4hocshargdf79nptg6.apps.googleusercontent.com' });
Vue.googleAuth().load();
Vue.googleAuth().directAccess();

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
