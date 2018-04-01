<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $color-pack = false

  @import '~vuetify/src/stylus/app'
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')
  @import '~vuetify/dist/vuetify.min.css'

  *
    box-sizing border-box

  html, body
      margin 0
      overflow hidden !important

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    text-align center
</style>
