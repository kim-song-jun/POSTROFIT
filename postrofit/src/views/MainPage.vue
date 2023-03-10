<template>
  <div class="MainPage-Container">
    <TopMenu></TopMenu>
    <div class="MainPage-Line2">
      <line-2></line-2>
    </div>
    <bottomMenu
      v-if="this.$store.state.clicked && !this.openLocker()"
    ></bottomMenu>
    <bottomLocker
      v-if="this.$store.state.clicked && this.openLocker()"
    ></bottomLocker>
  </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue';
import bottomMenu from '../components/bottomMenu.vue';
import bottomLocker from '../components/bottomLocker.vue';
import Line2 from '@/components/SubWay/Line2.vue';
export default {
  components: {
    TopMenu,
    bottomMenu,
    bottomLocker,
    Line2,
  },
  methods: {
    openLocker() {
      if (
        Object.keys(this.$store.state.EndStation).length > 0 &&
        Object.keys(this.$store.state.StartStation).length > 0
      ) {
        return false;
      } else {
        this.$store.commit('setClicked', true);
        return true;
      }
    },
  },
  mounted() {
    this.$store.dispatch('initStation', {});
  },
};
</script>

<style scoped>
.MainPage-Container {
  width: 100vh;
  height: 100vh;
}
.MainPage-Line2 {
  width: 100vh;
  height: 100vh;
  overflow: auto;
}
</style>
