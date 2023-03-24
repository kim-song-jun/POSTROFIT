<template>
  <div class="MainPage-Container">
    <topMenu></topMenu>
    <MainButton @scale="setScale" :translate="this.translate"></MainButton>
    <subwayLine2 @translate="setTranslate" :scale="this.scale"></subwayLine2>
    <bottomMenu v-if="this.$store.state.bottomMenuOpen"></bottomMenu>
    <bottomLocker v-if="this.$store.state.bottomLockerOpen"></bottomLocker>
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
      translate: 'translate(0px, 0px)',
      scale: 1,
    };
  },
  methods: {
    setTranslate(value) {
      this.translate = value;
    },
    setScale(value) {
      this.scale = value;
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
