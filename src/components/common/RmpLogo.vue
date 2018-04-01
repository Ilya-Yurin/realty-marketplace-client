<template>
  <div class="logo" @click="goToStart()">
    <span>Realty Marketplace</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  methods: {
    goToStart() {
      this.$router.push('start');
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .logo
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .02em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor pointer
</style>
