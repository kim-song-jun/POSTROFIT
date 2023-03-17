<template>
  <div class="MainPage-Container">
    <topMenu></topMenu>
    <line-2></line-2>
    <bottomMenu
      v-if="this.$store.state.clicked && !this.openLocker()"
    ></bottomMenu>
    <bottomLocker
      v-if="this.$store.state.clicked && this.openLocker()"
    ></bottomLocker>
  </div>
</template>

<script>
import topMenu from '../components/topMenu.vue';
import bottomMenu from '../components/bottomMenu.vue';
import bottomLocker from '../components/bottomLocker.vue';
import Line2 from '@/components/SubWay/Line2.vue';
export default {
  components: {
    topMenu,
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
    this.$store.commit('initLine2Json');
  },
};
</script>

<style scoped>
.MainPage-Container {
  width: auto;
  height: auto;
}
</style>
