<template>
  <div class="MainPage-Container">
    <topMenu></topMenu>
    <MainButton @scale="scale" :translate="this.trans"></MainButton>
    <subwayLine2 @translate="translate" :scale="this.sca"></subwayLine2>
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
import subwayLine2 from '../components/SubWay/subwayLine2.vue';
import MainButton from '../components/mainButton.vue';
export default {
  components: {
    topMenu,
    bottomMenu,
    bottomLocker,
    subwayLine2,
    MainButton,
  },
  data() {
    return {
      trans: 'translate(0px, 0px)',
      sca: 1,
    };
  },
  methods: {
    translate(value) {
      this.trans = value;
    },
    scale(value) {
      this.sca = value;
    },
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
};
</script>

<style scoped>
.MainPage-Container {
  width: auto;
  height: auto;
}
</style>
