import Vue from 'vue';
import Promise from 'bluebird';
import _ from 'lodash';
import * as AUTH from '../actions/auth';
import Auth from '../../services';
import { USER } from '../../constants';

const authState = {
  tokens: {
    access: null,
    refresh: null,
  },
  user: null,
  socialUser: null,
  isLoggedIn: false,
};

const getters = {
  user: state => state.user || {},
  socialUser: state => state.socialUser || {},
  hasSocialUser: state => !!state.socialUser,
  isAuthenticated: state => state.isLoggedIn,
  accessToken: state => state.tokens.access,
  refreshToken: state => state.tokens.refresh,
  isRealtor: state => (
    _.isObject(state.user) ? state.user.type === USER.REALTOR : false
  ),
  isAdmin: state => (
    _.isObject(state.user) ? state.user.type === USER.ADMIN : false
  ),
};

const actions = {
  [AUTH.REGISTER]: ({ commit }, userData) => (
    Auth.register(userData).then((data) => {
      commit(AUTH.SET_USER, data.user);
      commit(AUTH.SET_ACCESS_TOKEN, data.token.access);
      commit(AUTH.SET_REFRESH_TOKEN, data.token.refresh);
      commit(AUTH.SUCCESS);
    })
  ),
  [AUTH.CLEAR_SOCIAL_REGISTER_DATA]: ({ commit }) => (
    commit(AUTH.SET_SOCIAL_USER, null)
  ),
  [AUTH.LOGIN]: ({ commit }, credentials) => (
    Auth.login(credentials).then((data) => {
      commit(AUTH.SET_USER, data.user);
      commit(AUTH.SET_ACCESS_TOKEN, data.token.access);
      commit(AUTH.SET_REFRESH_TOKEN, data.token.refresh);
      commit(AUTH.SUCCESS);
    })
  ),
  [AUTH.LOGIN_GOOGLE]: ({ commit }) => (
    new Promise((resolve) => {
      Vue.googleAuth().signIn(googleUser => (
        Auth.loginGoogle(_.get(googleUser, 'Zi.access_token'))
          .then((data) => {
            commit(AUTH.SET_SOCIAL_USER, data.user);
            if (_.has(data, 'token')) {
              commit(AUTH.SET_ACCESS_TOKEN, data.token.access);
              commit(AUTH.SET_REFRESH_TOKEN, data.token.refresh);
              commit(AUTH.SUCCESS);
            }
            return resolve();
          })
      ));
    })
  ),
  [AUTH.SELF]: ({ commit }) => (
    Auth.getSelf().then((data) => {
      commit(AUTH.SET_USER, data.user);
      commit(AUTH.SUCCESS);
    })
  ),
  [AUTH.UPDATE_PROFILE]: ({ commit }, userData) => (
    Auth.updateProfile(userData).then((data) => {
      commit(AUTH.SET_USER, data.user);
    })
  ),
  [AUTH.LOGOUT]: ({ commit }) => {
    commit(AUTH.LOGOUT);
    commit(AUTH.CLEAR_ACCESS_TOKEN);
    commit(AUTH.CLEAR_REFRESH_TOKEN);
    commit(AUTH.SET_USER, null);
  },
  [AUTH.TOGGLE_TYPE]: ({ commit }, type) => {
    commit(AUTH.TOGGLE_TYPE, type);
  },
};

const mutations = {
  [AUTH.SUCCESS]: (state) => {
    state.isLoggedIn = true;
  },
  [AUTH.SET_USER]: (state, user) => {
    state.user = user;
  },
  [AUTH.SET_SOCIAL_USER]: (state, user) => {
    state.socialUser = user;
  },
  [AUTH.LOGOUT]: (state) => {
    state.isLoggedIn = false;
  },
  [AUTH.SET_ACCESS_TOKEN]: (state, token) => {
    localStorage.setItem('accessToken', token);
    state.tokens.access = token;
  },
  [AUTH.SET_REFRESH_TOKEN]: (state, token) => {
    localStorage.setItem('refreshToken', token);
    state.tokens.refresh = token;
  },
  [AUTH.CLEAR_ACCESS_TOKEN]: (state) => {
    localStorage.removeItem('accessToken');
    state.tokens.access = null;
  },
  [AUTH.CLEAR_REFRESH_TOKEN]: (state) => {
    localStorage.removeItem('refreshToken');
    state.tokens.refresh = null;
  },
  [AUTH.TOGGLE_TYPE]: (state, type) => {
    state.user.type = type;
  },
};

export default {
  state: authState,
  getters,
  actions,
  mutations,
};
