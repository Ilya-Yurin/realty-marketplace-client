<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        {{msg}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'UserProfiles',
  data() {
    return {
      msg: 'This is profile',
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
