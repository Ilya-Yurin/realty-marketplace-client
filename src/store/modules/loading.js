import * as LOADING from '../actions/loading';

const loadingState = {
  appLoading: true,
  authLoading: false,
};

const getters = {
  isAuthLoading: state => state.authLoading,
  isAppLoading: state => state.appLoading,
};

const actions = {
  [LOADING.APP_SET_STATUS]: ({ commit }, status) => (
    commit(LOADING.APP_SET_STATUS, status)
  ),
  [LOADING.AUTH_SET_STATUS]: ({ commit }, status) => (
    commit(LOADING.AUTH_SET_STATUS, status)
  ),
};

const mutations = {
  [LOADING.APP_SET_STATUS]: (state, status) => {
    state.appLoading = status;
  },
  [LOADING.AUTH_SET_STATUS]: (state, status) => {
    state.authLoading = status;
  },
};

export default {
  state: loadingState,
  getters,
  actions,
  mutations,
};
