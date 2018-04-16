import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/Start';
import Login from '@/components/Login';
import Registration from '@/components/Registration';
import Private from '@/components/Private';
import Objects from '@/components/Objects';
import Performers from '@/components/Performers';
import Profile from '@/components/Profile';
import UserProfiles from '@/components/UserProfiles';
import UserObjects from '@/components/UserObjects';
import UserDeals from '@/components/UserDeals';

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
