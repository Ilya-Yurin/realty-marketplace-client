<template>
  <v-app class="registration">
    <v-content>
      <v-container fluid>
        <v-layout row wrap align-center justify-center>
          <!-- LOGO -->
          <v-flex class="registration__logo" d-flex align-center justify-center xs12 sm10 md4>
            <rmp-logo/>
          </v-flex>
          <!-- /Logo -->

          <!-- CONTENT -->
          <v-flex d-flex xs12 sm10 md3>
            <v-card>
              <!-- NOTIFICATIONS -->
              <v-alert class="registration__alert" type="error" :value="isError" v-text="error"/>
              <!-- NOTIFICATIONS -->
              <v-card-text>
                <p class="title">Регистрация</p>
                <!-- REGISTRATION FROM -->
                <v-form v-model="valid" ref="form" lazy-validation>
                  <!-- FIRST NAME -->
                  <v-text-field name="first_name"
                                label="Имя"
                                type="text"
                                v-model="first_name"
                                :rules="firstNameRules"
                                required
                  />
                  <!-- /FIRST NAME -->

                  <!-- LAST NAME -->
                  <v-text-field name="last_name"
                                label="Фамилия"
                                type="text"
                                v-model="last_name"
                                :rules="lastNameRules"
                  />
                  <!-- /LAST NAME -->

                  <!-- EMAIL -->
                  <v-text-field name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                  />
                  <!-- /EMAIL -->

                  <!-- PHONE -->
                  <v-text-field name="phone"
                                label="Телефон"
                                type="tel"
                                v-model="phone"
                                :rules="phoneRules"
                                mask="# (###) ###-####"
                                required
                  />
                  <!-- /PHONE -->

                  <!-- PASSWORD -->
                  <v-text-field name="password"
                                label="Пароль"
                                id="password"
                                v-model="password"
                                :rules="passwordRules"
                                :append-icon="isPasswordVisible ? 'visibility_off' : 'visibility'"
                                :append-icon-cb="() => (isPasswordVisible = !isPasswordVisible)"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                required
                  />
                  <!-- /PASSWORD -->

                  <!-- CONFIRM PASSWORD -->
                  <v-text-field name="confirm_password"
                                label="Пароль еще раз"
                                id="confirm_password"
                                v-model="confirm_password"
                                :rules="confirmPasswordRules"
                                :append-icon="isPasswordVisible ? 'visibility_off' : 'visibility'"
                                :append-icon-cb="() => (isPasswordVisible = !isPasswordVisible)"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                required
                  />
                  <!-- CONFIRM PASSWORD -->
                </v-form>
                <!-- /REGISTRATION FROM -->
              </v-card-text>
              <!-- ACTIONS -->
              <v-card-actions>
                <v-flex d-flex>
                <v-btn large color="primary" @click="register()"
                       :disabled="!valid">
                  Зарегистрироваться</v-btn>
                </v-flex>
              </v-card-actions>
              <!-- /ACTIONS -->
            </v-card>
          </v-flex>
          <!-- /CONTENT -->

          <!-- SPACER -->
          <v-flex d-flex xs12 sm10 md4>
            <v-spacer/>
          </v-flex>
          <!-- /SPACER -->
        </v-layout>
        <!-- FOOTER -->
        <div class="registration--footer">
          <div class="registration--footer__label">&copy; 2018</div>
        </div>
        <!-- /FOOTER -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import { RmpLogo, RmpSocials } from './common';
import * as AUTH from '../store/actions/auth';

export default {
  name: 'registration',
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
      last_name: '',
      lastNameRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      first_name: '',
      firstNameRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Необходимо заполнить поле',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Введите корректный адрес',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      confirm_password: '',
      confirmPasswordRules: [
        v => v === this.password || 'Введенные пароли не совпадают',
        v => !!v || 'Необходимо заполнить поле',
      ],
    };
  },
  methods: {
    ...mapActions({
      registerAccount: AUTH.REGISTER,
    }),
    register() {
      const userData = {
        email: this.email,
        password: this.password,
        phone: this.phone,
        first_name: this.first_name,
        last_name: this.last_name,
      };
      this.registerAccount(userData)
        .then(() => {
          this.$router.push('/profile');
        })
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

  .registration
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
