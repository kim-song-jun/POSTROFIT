<template>
  <router-view></router-view>
</template>

<script>
import '@fontsource/roboto';
export default {
  name: 'App',
  components: {},
  mounted() {
    this.$store.dispatch('initStation');
    this.$store.commit('initLine2Json');
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  color: #707070;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
