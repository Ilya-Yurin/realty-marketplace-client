<template>
  <v-app class="login">
    <v-content>
      <v-container fluid>
        <v-layout row wrap align-center justify-center>
          <v-flex class="login__logo" d-flex align-center justify-center xs12 sm10 md4>
            <rmp-logo/>
          </v-flex>
          <v-flex d-flex xs12 sm10 md4>
            <v-card>
              <v-card-text>
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
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn flat color="info">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm10 md4>
            <spacer/>
          </v-flex>
        </v-layout>
        <div class="login--footer">
          <div class="login--footer__label">&copy; 2018</div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { RmpLogo } from './common';

export default {
  name: 'login',
  components: {
    RmpLogo,
  },
  data() {
    return {
      isPasswordVisible: false,
      valid: false,
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

    &--footer
      padding 2rem 2rem
      &__label
        color #ddd
</style>
