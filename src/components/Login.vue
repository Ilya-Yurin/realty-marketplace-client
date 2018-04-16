<template>
  <v-app class="login">
    <v-content>
      <v-container fluid>
        <v-layout row wrap align-center justify-center>
          <!-- LOGO -->
          <v-flex class="login__logo" d-flex align-center justify-center xs12 sm10 md4>
            <rmp-logo/>
          </v-flex>
          <!-- /Logo -->

          <!-- LOGIN FORM -->
          <v-flex d-flex xs12 sm10 md4>
            <v-card>
              <!-- NOTIFICATIONS -->
              <v-alert class="login__alert" type="error" :value="isError" v-text="error"/>
              <!-- NOTIFICATIONS -->
              <v-card-text>
                <!-- SOCIAL ICONS -->
                <rmp-socials/>
                <!-- /SOCIAL ICONS -->
                <v-form>
                  <v-text-field prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required>
                  </v-text-field>
                  <v-text-field prepend-icon="lock"
                                name="password"
                                label="Password"
                                id="password"
                                v-model="password"
                                :rules="passwordRules"
                                :append-icon="isPasswordVisible ? 'visibility_off' : 'visibility'"
                                :append-icon-cb="() => (isPasswordVisible = !isPasswordVisible)"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                required>
                  </v-text-field>
                </v-form>
                <!-- /LOGIN FROM -->
              </v-card-text>
              <!-- ACTIONS -->
              <v-card-actions>
                <v-btn large color="primary" @click="login">Войти</v-btn>
                <v-btn large to="registration">Регистрация</v-btn>
              </v-card-actions>
              <!-- /ACTIONS -->
            </v-card>
          </v-flex>
          <!-- /LOGIN FORM -->

          <!-- SPACER -->
          <v-flex d-flex xs12 sm10 md4>
            <v-spacer/>
          </v-flex>
          <!-- /SPACER -->
        </v-layout>
        <!-- FOOTER -->
        <div class="login--footer">
          <div class="login--footer__label">&copy; 2018</div>
        </div>
        <!-- /FOOTER -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { RmpLogo, RmpSocials } from './common';
import * as AUTH from '../store/actions/auth';

export default {
  name: 'login',
  components: {
    RmpLogo,
    RmpSocials,
  },
  data() {
    return {
      isPasswordVisible: false,
      valid: false,
      isError: false,
      error: '',
      email: '',
      emailRules: [
        v => !!v || 'Необходимо заполнить поле',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Введите корректный адрес',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.$store.dispatch(AUTH.LOGIN, { email, password })
        .then(() => this.$router.push('/'))
        .catch((err) => {
          this.error = err.toString();
          this.isError = true;
        });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  *
    text-transform initial

  .login
    background-color #373c55

    &__logo
      align-self flex-start
      padding-bottom 2rem
      color #fff

    &__alert
      margin 0

    &__social
      display flex
      padding 16px

    &--footer
      padding 2rem 2rem
      &__label
        color #ddd
</style>
