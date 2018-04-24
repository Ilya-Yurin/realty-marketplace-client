<template>
  <header>
    <v-toolbar dark app height="65px">
      <v-spacer/>
      <!-- LOGO -->
      <v-toolbar-title>
        <rmp-logo/>
      </v-toolbar-title>
      <!-- /LOGO -->
      <!-- MAIN HEADER MENU -->
      <v-toolbar-items class="header-menu hidden-sm-and-down">
        <v-btn flat to="/objects">Объекты</v-btn>
        <v-btn flat to="/performers">Исполнители</v-btn>
      </v-toolbar-items>
      <!-- /MAIN HEADER MENU -->
      <v-spacer/>
      <!-- PROFILE MENU -->
      <v-toolbar-items class="header-menu hidden-sm-and-down">
        <v-menu dark offset-y class="hidden-sm-and-down">
        <v-btn flat slot="activator">
          <v-avatar size="40px">
            <img :src="loggedUser.image_url" alt="">
          </v-avatar>
          <div class="profile-card">
            <div class="profile-card--name body-2">
              {{loggedUser.first_name}} {{loggedUser.last_name}}
            </div>
            <div class="caption grey--text" v-if="isRealtor">Риэлтор</div>
          </div>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
        <v-list class="hidden-sm-and-down">
          <v-list-tile @click="goToRouteByName('user-profiles')">
            <v-list-tile-title>Мой профиль</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToRouteByName('user-objects')">
            <v-list-tile-title>Мои объекты</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToRouteByName('user-deals')">
            <v-list-tile-title>Мои сделки</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logoutUser">
            <v-list-tile-title>Выйти</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      </v-toolbar-items>
      <!-- /PROFILE MENU -->

      <!-- SMALL SCREEN MENU -->
      <!-- main menu -->
      <v-menu dark offset-y class="hidden-md-and-up">
        <v-btn icon slot="activator" dark>
          <v-icon>menu</v-icon>
        </v-btn>
        <v-list class="hidden-md-and-up">
          <v-list-tile @click="goToRouteByName('objects')">
            <v-list-tile-title>Объекты</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToRouteByName('performers')">
            <v-list-tile-title>Исполнители</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- /main menu -->

      <!-- profile menu -->
      <v-menu dark offset-y class="hidden-md-and-up">
        <v-btn icon slot="activator" dark>
          <v-icon>person</v-icon>
        </v-btn>
        <v-list class="hidden-md-and-up">
          <v-list-tile @click="goToRouteByName('user-profiles')">
            <v-list-tile-title>Мой профиль</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToRouteByName('user-objects')">
            <v-list-tile-title>Мои объекты</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToRouteByName('user-deals')">
            <v-list-tile-title>Мои сделки</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logoutUser">
            <v-list-tile-title>Выйти</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- /profile menu -->
      <!-- /SMALL SCREEN MENU -->
      <v-spacer/>
    </v-toolbar>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RmpLogo from './RmpLogo';
import * as AUTH from '../../store/actions/auth';

export default {
  name: 'RmpHeader',
  components: {
    RmpLogo,
  },
  computed: {
    ...mapGetters({
      loggedUser: 'user',
      isRealtor: 'isRealtor',
    }),
  },
  methods: {
    ...mapActions({
      logout: AUTH.LOGOUT,
      clearAuthData: AUTH.CLEAR_SOCIAL_REGISTER_DATA,
    }),
    goToRouteByName(name) {
      this.$router.push({ name });
    },
    logoutUser() {
      this.logout().then(() => {
        this.$router.push('/login');
        this.clearAuthData();
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  *
    text-transform initial

  .logo
    margin 0
    align-self center
    cursor pointer

  .avatar
    background url("../../assets/images/user-dummy.svg")

  .header-menu
    padding 0 1rem

  .profile-card
    padding 0 1rem

</style>
