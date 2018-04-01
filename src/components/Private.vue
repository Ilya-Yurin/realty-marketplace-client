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

<!--
<style lang="stylus" rel="stylesheet/stylus" scoped>

  header
    display flex
    background-color #262a2d
    color #fff
    height auto
    justify-content center
    align-items center

    .logo
      display flex
      padding 1rem 1rem
      a
        display flex
        color #fff
        font-size 1.35rem
        text-decoration none
        align-self center
        cursor pointer

    nav
      flex 2 0 auto
      align-self center

    .header-container
      display flex
      flex 0.6
      margin auto

      .head-menu
        display flex
        flex 2 0 auto

        &__main
          flex 2 0 auto
          display flex
          align-self stretch
          align-items center

          &__item
            display flex
            align-self stretch

            a
              display flex
              color #fff
              font-size 1rem
              padding 0 1rem
              text-decoration none
              cursor pointer
              align-self center

          &__item:hover
            background #080808


        &__profile
          display flex
          flex 0 0 auto
          cursor pointer
          align-self center
          padding 1.15rem 1rem

          .profile-menu
            display flex
            align-items center

            .md-avatar
              margin-right 16px
              outline-color red
              img
                background url("../../../static/assets/images/user-dummy.svg")

            .profile-menu__user-info
              display flex
              flex-flow column
              flex 1
              align-items flex-start
              justify-content start

              &&#45;&#45;name
                font-size 0.8rem

              &&#45;&#45;type
                color #777
                font-size 0.7rem


</style>
-->

