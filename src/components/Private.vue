<template>
  <div id="private">
    <v-app>
      <rmp-header/>
      <!-- Nested router for private part of the site -->
      <router-view></router-view>
      <!-- /Nested router for private part of the site -->
      <rmp-footer/>
    </v-app>
  </div>
</template>

<script>
import { RmpHeader, RmpFooter } from './common';

export default {
  name: 'Home',
  components: {
    RmpHeader,
    RmpFooter,
  },
};
</script>
