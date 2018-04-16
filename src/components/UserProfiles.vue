<template>
  <v-container fluid fill-height>
    <v-layout justify-center>
        <!-- CONTENT -->
        <v-flex d-flex xs12 sm10 md3>
          <div>
            <!-- NOTIFICATIONS -->
            <v-alert class="registration__alert" type="error" :value="isError" v-text="error"/>
            <!-- NOTIFICATIONS -->
            <v-card-text>
              <p class="title">Редактирование профиля</p>
              <!-- EDIT PROFILE FROM -->
              <v-form v-model="valid" ref="form" lazy-validation>
                <!-- FIRST NAME -->
                <v-text-field name="first_name"
                              label="Имя"
                              type="text"
                              v-model="user.first_name"
                              :rules="firstNameRules"
                              required>
                </v-text-field>
                <!-- /FIRST NAME -->

                <!-- LAST NAME -->
                <v-text-field name="last_name"
                              label="Фамилия"
                              type="text"
                              v-model="user.last_name"
                              :rules="lastNameRules">
                </v-text-field>
                <!-- /LAST NAME -->

                <!-- PHONE -->
                <v-text-field name="phone"
                              label="Телефон"
                              type="text"
                              v-model="user.phone"
                              :rules="phoneRules"
                              mask="(###) ###-####"
                              required>
                </v-text-field>
                <!-- /PHONE -->

                <!-- EMAIL -->
                <v-text-field name="email"
                              label="Email"
                              type="email"
                              v-model="user.email"
                              :rules="emailRules"
                              required>
                </v-text-field>
                <!-- /EMAIL -->

                <v-checkbox label="Риэлтор"
                            v-if="!isAdmin"
                            v-model="isRealtor"
                            @click="toggleRealtor()"/>

              </v-form>
              <!-- /EDIT PROFILE FROM -->
            </v-card-text>
            <!-- ACTIONS -->
            <v-card-actions>
              <v-flex d-flex>
                <v-btn large color="primary"
                       @click="updateProfile()"
                       :disabled="!valid">
                  Сохранить</v-btn>
              </v-flex>
            </v-card-actions>
            <!-- /ACTIONS -->
          </div>
        </v-flex>
        <!-- /CONTENT -->
    </v-layout>
  </v-container>
</template>

<script>
import _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';
import * as AUTH from '../store/actions/auth';
import { USER } from '../constants';
import store from '../store/index';

export default {
  name: 'UserProfiles',
  data: () => (
    {
      user: _.assign({}, store.state.auth.user),
      isRealtor: store.state.auth.user.type === USER.REALTOR,
      valid: false,
      isError: false,
      error: '',
      lastNameRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      firstNameRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      emailRules: [
        v => !!v || 'Необходимо заполнить поле',
        v => /^.+@.+\..+$/.test(v) || 'Введите корректный адрес',
      ],
      phoneRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
    }
  ),
  computed: {
    ...mapGetters({
      isAdmin: 'isAdmin',
    }),
  },
  methods: {
    ...mapActions({
      saveProfile: AUTH.UPDATE_PROFILE,
      toggleType: AUTH.TOGGLE_TYPE,
    }),
    updateProfile() {
      const dataToUpdate = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        phone: this.user.phone,
        type: this.user.type,
      };
      this.saveProfile(dataToUpdate)
        .catch((error) => {
          this.error = error.toString();
        });
    },
    toggleRealtor() {
      if (this.isRealtor) {
        this.user.type = USER.USER;
      } else {
        this.user.type = USER.REALTOR;
      }
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
