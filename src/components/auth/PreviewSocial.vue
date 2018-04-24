<template>
  <v-layout column v-if="showPreview">
    <v-card>
      <v-card-text>
        <v-layout row wrap align-center class="pb-2">
          <!-- AVATAR WITH LINK -->
          <a :href="socialLink" v-if="hasAvatar">
            <v-avatar size="50px">
              <img :src="imgUrl" alt=""/>
            </v-avatar>
          </a>
          <!-- /AVATAR WITH LINK -->

          <!-- USER NAME FROM SOCIAL WITH LINK -->
          <v-flex d-flex row wrap align-center offset-xs1>
            <a :href="socialLink" class="text-xs-left title grey--text">
              {{ userName }}
            </a>
          </v-flex>
          <!-- /USER NAME FROM SOCIAL WITH LINK -->
        </v-layout>
        <v-layout row wrap>
          <v-flex>
            <p class="caption grey--text">Профиль не связан с какой-либо
              учетной записью. <router-link to="/login">Войдите</router-link>
              на сайт или зарегистрируйтесь, чтобы связать свою учетную
              запись с профилем социальной сети.</p>
            <p class="caption grey--text">Или выберите другую
              социальную сеть для входа.</p>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import store from '../../store/';

export default {
  data() {
    return {
      user: store.state.auth.socialUser,
    };
  },
  computed: {
    ...mapGetters({
      showPreview: 'hasSocialUser',
    }),
    imgUrl() {
      return _.get(this.user, 'image_url');
    },
    hasAvatar() {
      return !!_.get(this.user, 'image_url');
    },
    userName() {
      const lastName = _.get(this.user, 'last_name', '');
      const firstName = _.get(this.user, 'first_name', '');
      const username = _.get(this.user, 'username', '');
      return `${firstName || username} ${lastName}`;
    },
    socialLink() {
      return _.get(this.user, 'link');
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  a
    text-decoration none

  a:hover
    text-decoration underline

  .avatar
    justify-content flex-start
  p
    text-align left
</style>
