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
  name: 'Objects',
  data() {
    return {
      msg: 'Objects',
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
