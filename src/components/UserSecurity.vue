<template>
  <!-- CONTENT -->
  <div>
    <v-card-title primary-title>
      <div class="headline">Изменение пароля</div>
    </v-card-title>
    <v-divider/>
    <!-- NOTIFICATIONS -->
    <v-alert class="registration__alert" type="error" :value="isError"
             v-text="error"/>
    <!-- NOTIFICATIONS -->
    <v-card-text>
      <!-- CHANGE PASSWORD FORM -->
      <v-form v-model="valid" ref="form" lazy-validation>
        <!-- CURRENT PASSWORD -->
        <v-text-field name="password"
                      label="Текущий пароль"
                      type="password"
                      v-model="password"
                      :rules="passwordRules"
                      required
        />
        <!-- /CURRENT PASSWORD -->

        <!-- NEW PASSWORD -->
        <v-text-field name="new_password"
                      label="Новый пароль"
                      type="password"
                      v-model="new_password"
                      :rules="newPasswordRules"
                      required
        />
        <!-- /NEW PASSWORD -->

        <!-- CONFIRM NEW PASSWORD -->
        <v-text-field name="confirm_new_password"
                      label="Новый пароль еще раз"
                      type="password"
                      v-model="confirm_new_password"
                      :rules="confirmNewPasswordRules"
                      required
        />
        <!-- /CONFIRM NEW PASSWORD -->

      </v-form>
      <!-- /CHANGE PASSWORD -->
    </v-card-text>
    <v-divider/>

    <!-- ACTIONS -->
    <v-card-actions>
      <v-flex d-flex>
        <v-btn large
               color="primary"
               :disabled="!valid"
               @click="updatePassword()">
          Сохранить
        </v-btn>
      </v-flex>
    </v-card-actions>
    <!-- /ACTIONS -->
  </div>
  <!-- /CONTENT -->
</template>

<script>
export default {
  name: 'UserSecurity',
  data() {
    return {
      valid: false,
      isError: false,
      error: '',
      password: '',
      passwordRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      new_password: '',
      newPasswordRules: [
        v => !!v || 'Необходимо заполнить поле',
      ],
      confirm_new_password: '',
      confirmNewPasswordRules: [
        v => v === this.new_password || 'Введенные пароли не совпадают',
        v => !!v || 'Необходимо заполнить поле',
      ],
    };
  },
  methods: {
    updatePassword() {
      this.isError = true;
      this.error = 'Пока не реализовано!';
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
