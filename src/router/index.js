import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/Start';
import Login from '@/components/auth/Login';
import Registration from '@/components/auth/Registration';
import Private from '@/components/Private';
import Objects from '@/components/Objects';
import Performers from '@/components/Performers';
import Profile from '@/components/Profile';
import UserProfiles from '@/components/profile/UserProfiles';
import UserObjects from '@/components/profile/UserObjects';
import UserDeals from '@/components/profile/UserDeals';
import UserSettings from '@/components/profile/UserSettings';
import UserSecurity from '@/components/profile/UserSecurity';

import AppInit from './guards/AppInit';
import RedirectIfAuthenticated from './guards/RedirectIfAuthenticated';
import IsAuthenticated from './guards/IsAuthenticated';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'private',
      component: Private,
      beforeEnter: IsAuthenticated,
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
              redirect: 'settings',
              children: [
                {
                  path: 'settings',
                  name: 'profiles-settings',
                  component: UserSettings,
                },
                {
                  path: 'security',
                  name: 'profiles-security',
                  component: UserSecurity,
                },
              ],
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
      beforeEnter: RedirectIfAuthenticated,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
      beforeEnter: RedirectIfAuthenticated,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach(AppInit);

export default router;
