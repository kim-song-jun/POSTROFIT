<template>
  <div class="MainPage-Container">
    <topMenu @translate="setTranslate" :scale="this.scale"></topMenu>
    <MainButton @scale="setScale" :translate="this.translate"></MainButton>
    <subwayLine2 @translate="setTranslate" :scale="this.scale"></subwayLine2>
    <bottomMenu
      v-if="this.$store.state.bottomMenuOpen"
      class="animate__animated animate__fast"
      :class="setSlider(this.$store.state.bottomMenuOpen)"
    />
    <bottomLocker
      v-if="
        this.$store.state.bottomLockerOpen && !this.$store.state.bottomMenuOpen
      "
      class="animate__animated animate__fast"
      :class="setSlider(this.$store.state.bottomLockerOpen)"
    />
  </div>
</template>

<script>
import topMenu from '../components/Main/topMenu.vue';
import bottomMenu from '../components/Main/bottomMenu.vue';
import bottomLocker from '../components/Main/bottomLocker.vue';
import subwayLine2 from '../components/SubWay/subwayLine2.vue';
import MainButton from '../components/mainButton.vue';
import 'animate.css';
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
    setSlider(state) {
      if (state) return 'animate__slideInUp';
      return 'animate__slideOutDown';
    },
    setTranslate(value) {
      this.translate = value;
    },
    setScale(value) {
      this.scale = value;
    },
  },
  created() {
    if (this.$store.state.userID == Infinity) this.$router.push('/LoginPage');
  },
};
</script>

<style scoped>
.MainPage-Container {
  width: auto;
  height: auto;
}
</style>
