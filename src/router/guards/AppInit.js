import store from '../../store';
import * as AUTH from '../../store/actions/auth';
import * as LOADING from '../../store/actions/loading';

export default (to, from, next) => {
  if (!store.getters.isAppLoading) {
    next();
  }

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (!accessToken) {
    store.dispatch(LOADING.APP_SET_STATUS, false);
    next();
  }

  store.dispatch(LOADING.AUTH_SET_STATUS, true);
  store.commit(AUTH.SET_ACCESS_TOKEN, accessToken);
  store.commit(AUTH.SET_REFRESH_TOKEN, refreshToken);
  store.dispatch(AUTH.SELF)
    .then(() => {
      store.dispatch(LOADING.APP_SET_STATUS, false);
      store.dispatch(LOADING.AUTH_SET_STATUS, false);
      next();
    })
    .catch(() => {
      store.dispatch(LOADING.APP_SET_STATUS, false);
      store.dispatch(LOADING.AUTH_SET_STATUS, false);
      store.dispatch(AUTH.LOGOUT);
      next('/login');
    });
};
