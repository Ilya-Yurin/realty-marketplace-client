<template>
  <div class="socials pb-2">
    <!-- PROGRESS -->
    <v-progress-circular v-if="isLoading"
                         indeterminate
                         color="primary"
                         :size="50"
    />
    <!-- /PROGRESS -->
    <div v-if="!isLoading" class="socials__container">
      <!-- Facebook -->
      <v-tooltip bottom>
        <v-btn fab small slot="activator" @click="toFacebook()">
          <v-avatar size="43px">
            <img src="../../assets/images/facebook.svg">
          </v-avatar>
        </v-btn>
        <span>Войти с помощью Facebook</span>
      </v-tooltip>
      <!-- /Facebook -->

      <!-- VK -->
      <v-tooltip bottom>
        <v-btn fab small slot="activator" @click="toVk()">
          <v-avatar size="43px">
            <img src="../../assets/images/vk.svg">
          </v-avatar>
        </v-btn>
        <span>Войти с помощью Вконтакте</span>
      </v-tooltip>
      <!-- /VK -->

      <!-- Google -->
      <v-tooltip bottom>
        <v-btn fab small slot="activator" @click="toGoogle()">
          <v-avatar size="43px">
            <img src="../../assets/images/google-plus.svg">
          </v-avatar>
        </v-btn>
        <span>Войти с помощью Google</span>
      </v-tooltip>
      <!-- /Google -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as AUTH from '../../store/actions/auth';

export default {
  name: 'RmpSocials',
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      registerGP: AUTH.LOGIN_GOOGLE,
      registerVK: AUTH.REGISTER,
      registerFB: AUTH.REGISTER,
    }),
    toGoogle() {
      this.isLoading = true;
      this.registerGP().then(() => this.$router.push('/registration'));
    },
    toFacebook() {
      this.isLoading = true;
      this.$router.push('/registration');
    },
    toVk() {
      this.isLoading = true;
      this.$router.push('/registration');
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .socials
    &__container
      display flex
      justify-content flex-start
      flex-wrap wrap
</style>
