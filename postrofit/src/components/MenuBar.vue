<template>
  <div class="menuBar_container">
    <div class="menuBar_bottom_menu_bar">
      <div class="menuBar_subway_line">2</div>
      <div v-if="0" class="menuBar_subway_line">4</div>
      <div class="menuBar_round_bar"></div>
      <div class="menuBar_close_btn" @click="closeMenu">X</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      const start = this.startStation?.name?.length ?? 0;
      const end = this.endStation?.name?.length ?? 0;
      if (start && end) {
        this.$store.dispatch('initStation');
        return;
      }
      this.$store.commit('setBottomMenuOpen', false);
      this.$store.commit('setBottomLockerOpen', false);
    },
  },
  computed: {
    startStation() {
      return this.$store.state.startStation;
    },
    endStation() {
      return this.$store.state.endStation;
    },
    selectStation() {
      return this.$store.state.selectStation;
    },
  },
};
</script>

<style>
.menuBar_container {
  position: relative;
}
.menuBar_bottom_menu_bar {
  display: flex;
  height: 5vh;
  align-items: center;
  /* border-top: 2px solid #888888; */
  border-bottom: 1.5px solid #ccc;
  box-shadow: 0vw -0.8vw 1.5vw #00000029;
  border-radius: 5vw 5vw 0vw 0vw;
  opacity: 1;
}
.menuBar_subway_line {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 5vw;
  margin: 0px 3.5vw;
  /* Layout Properties */
  width: 7vw;
  height: 7vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  opacity: 1;
}
.menuBar_round_bar {
  position: absolute;
  margin-bottom: 4vw;
  /* Layout Properties */
  left: 41vw;
  width: 21vw;
  height: 0.8vw;
  /* UI Properties */
  /* background: var(--unnamed-color-cfcfcf) 0% 0% no-repeat padding-box; */
  background: #cfcfcf 0% 0% no-repeat padding-box;
  border-radius: 10vw;
  opacity: 1;
}
.menuBar_close_btn {
  position: absolute;
  /* Layout Properties */
  right: 3vw;
  width: 3.5vw;
  height: 7vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal 100 var(--unnamed-font-size-20) / 26px Roboto; */
  /* letter-spacing: var(--unnamed-character-spacing-0); */
  /* color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal 100 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
