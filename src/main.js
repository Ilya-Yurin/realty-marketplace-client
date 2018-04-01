import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import store from './store/index';

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
