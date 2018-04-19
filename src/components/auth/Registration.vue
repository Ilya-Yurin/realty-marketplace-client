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

                <!-- PREVIEW DATA FROM SOCIAL NETWORK -->
                <v-layout class="registration__preview pb-3" column>
                  <v-card>
                    <v-card-text>
                      <v-layout row wrap align-center class="pb-2">
                        <v-avatar size="50px">
                          <img src="../../assets/images/user-dummy.svg"
                               alt=""/>
                        </v-avatar>
                        <v-flex d-flex row wrap align-center offset-xs1>
                            <span class="text-xs-left subheading">
                              Александров
                              Александр
                            </span>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex>
                          <p class="caption grey--text">Профиль не связан с
                            какой-либо учетной записью. Войдите на сайт или
                            зарегистрируйтесь, чтобы связать свою учетную
                            запись с профилем социальной сети.</p>
                          <p class="caption grey--text">Или выберите другую
                            социальную сеть для входа.</p>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-layout>
                <!-- /PREVIEW DATA FROM SOCIAL NETWORK -->

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
                <v-layout row wrap align-center>
                <v-flex d-flex class="pb-2">
                    <v-btn large @click="logIn()">Войти</v-btn>
                </v-flex>
                  <v-flex d-flex class="pb-2">
                    <v-btn large color="primary" @click="register()"
                           :disabled="!valid">
                      Зарегистрироваться
                    </v-btn>
                  </v-flex>
                </v-layout>
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
import { RmpLogo, RmpSocials } from '../common/index';
import * as AUTH from '../../store/actions/auth';

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
        .then(() => this.$router.push('/profile'))
        .catch((err) => {
          this.error = err.toString();
          this.isError = true;
        });
    },
    logIn() {
      console.log('You login!!!');
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

    &__preview
      .avatar
        justify-content flex-start
      p
        text-align left

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
