import store from '../../store';

export default (to, from, next) => {
  if (store.getters.isAuthenticated || store.getters.isAppLoading) {
    next();
  } else {
    next('login');
  }
};
