<template>
  <div class="socials">
    <!-- Facebook -->
    <v-tooltip bottom>
      <v-btn fab small slot="activator">
        <v-avatar size="43px">
          <img src="../../assets/images/facebook.svg">
        </v-avatar>
      </v-btn>
      <span>Войти с помощью Facebook</span>
    </v-tooltip>
    <!-- /Facebook -->

    <!-- VK -->
    <v-tooltip bottom>
      <v-btn fab small slot="activator">
        <v-avatar size="43px">
          <img src="../../assets/images/vk.svg">
        </v-avatar>
      </v-btn>
      <span>Войти с помощью Вконтакте</span>
    </v-tooltip>
    <!-- /VK -->

    <!-- Google -->
    <v-tooltip bottom>
      <v-btn fab small slot="activator">
        <v-avatar size="43px">
          <img src="../../assets/images/google-plus.svg">
        </v-avatar>
      </v-btn>
      <span>Войти с помощью Google</span>
    </v-tooltip>
    <!-- /Google -->
  </div>
</template>

<script>
export default {
  name: 'RmpSocials',
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .socials
    display flex
    justify-content flex-start
    flex-wrap wrap
</style>
