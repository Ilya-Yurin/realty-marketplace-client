<template>
  <v-container fluid fill-height>
    <v-layout justify-center>
        <!-- CONTENT -->
        <v-flex d-flex xs12 sm10 md3>
          <div>
          <v-tabs
              v-model="tabs"
              icons-and-text
              dark
              grow
              slot="extension"
            >
              <v-tab href="#profiles-settings"
                     @click="goToRouteByName('profiles-settings')"
              >
                Аккаунт
                <v-icon>account_box</v-icon>
              </v-tab>
              <v-tab href="#profiles-security"
                     @click="goToRouteByName('profiles-security')"
              >
                Безопасность
                <v-icon>lock</v-icon>
              </v-tab>
            </v-tabs>
          <v-tabs-items v-model="tabs" class="white elevation-3">
            <v-tab-item id="profiles-settings">
              <router-view/>
            </v-tab-item>
            <v-tab-item id="profiles-security">
             <router-view/>
            </v-tab-item>
          </v-tabs-items>
          </div>
        </v-flex>
        <!-- /CONTENT -->
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import * as AUTH from '../../store/actions/auth';

export default {
  name: 'UserProfiles',
  data() {
    return {
      tabs: `${this.$route.name}`,
    };
  },
  methods: {
    ...mapActions({
      saveProfile: AUTH.UPDATE_PROFILE,
      toggleType: AUTH.TOGGLE_TYPE,
    }),
    goToRouteByName(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
