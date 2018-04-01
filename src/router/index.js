import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/Start';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Private from '@/components/Private';
import Objects from '@/components/Objects';
import Performers from '@/components/Performers';
import Profile from '@/components/Profile';
import UserProfiles from '@/components/UserProfiles';
import UserObjects from '@/components/UserObjects';
import UserDeals from '@/components/UserDeals';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'private',
      component: Private,
      children: [
        {
          path: '/',
          name: 'start',
          component: Start,
        },
        {
          path: '/objects',
          name: 'objects',
          component: Objects,
        },
        {
          path: '/performers',
          name: 'performers',
          component: Performers,
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
          children: [
            {
              path: '',
              name: 'user-profiles',
              component: UserProfiles,
            },
            {
              path: 'objects',
              name: 'user-objects',
              component: UserObjects,
            },
            {
              path: 'deals',
              name: 'user-deals',
              component: UserDeals,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
