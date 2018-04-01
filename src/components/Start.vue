<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex shrink>
          {{msg}}
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      msg: 'This is home',
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
