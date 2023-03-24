<template>
  <div class="select_container">
    <MenuBar />
    <router-view />
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue';

export default {
  components: {
    MenuBar,
  },
};
</script>

<style>
.select_container {
  width: 100vw;
  height: 97.7vh;
  padding-top: 2.3vh;
}
</style>
