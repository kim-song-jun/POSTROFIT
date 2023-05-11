<template>
  <div class="topMenu_container">
    <div class="topMenu_content">
      <img
        class="topMenu_user_circle"
        src="../../assets/images/user.png"
        alt=""
        @click="move2UserPage"
      />
      <div class="topMenu_bar"></div>
      <div class="topMenu_stations">
        <input
          type="text"
          placeholder="출발역을 입력해주세요"
          class="topMenu_source"
          :value="startStation?.name ?? ''"
          @input="setStartStation"
        />
        <!-- {{ this.$store.state.startStation?.name ?? '출발역' }} -->
        <input
          type="text"
          placeholder="도착역을 입력해주세요"
          class="topMenu_destination"
          :value="endStation?.name ?? ''"
          @input="setEndStation"
        />
        <!-- {{ this.$store.state.endStation?.name ?? '도착역' }} -->
      </div>
      <div class="topMenu_changebtn">
        <img
          class="topMenu_changeArrow"
          src="../../assets/images/changeArrow.png"
          alt=""
          @click="changeStation"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    move2UserPage() {
      this.$store.commit('setBottomMenuOpen', false);
      this.$store.commit('setBottomLockerOpen', false);
      this.$store.commit('setBottomStationOpen', false);
      this.$router.push('/UserPage');
    },
    setStartStation() {
      if (this.$store.state.bottomMenuOpen == true)
        this.$store.commit('setBottomMenuOpen', false);
      this.$store.commit('setBottomStationCreated', true);
      this.$store.commit('setBottomStationOpen', true);
    },
    setEndStation() {
      if (this.$store.state.bottomMenuOpen == true)
        this.$store.commit('setBottomMenuOpen', false);
      this.$store.commit('setBottomStationCreated', true);
      this.$store.commit('setBottomStationOpen', true);
    },
  },
};
</script>

<style>
.topMenu_container {
  position: fixed;
  /* Layout Properties */
  top: 5vw;
  left: 3.5vw;
  width: 93vw;
  height: 17.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0303034d;
  border-radius: 5vw;
  opacity: 1;
  z-index: 10;
  padding: 8px 0px 10px;
}
.topMenu_content {
  width: 86vw;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  /* justify-content: center; */
  align-items: center;
  /* position: absolute; */
  /* Layout Properties */
  /* top: 5vw;
  left: 4vw; */
}
.topMenu_user_circle {
  width: 7.5vw;
  height: 7.5vw;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 5vw;
  opacity: 1;
}
.topMenu_stations {
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly;
  align-items: center; */
  width: 100%;
}
.topMenu_bar {
  border-right: 1.5px darkgray solid;
  height: 13.5vw;
  margin: 0vw 2.5vw;
}
.topMenu_changebtn {
  padding: 0px 0px 0px 5px;
}
.topMenu_changeArrow {
  position: relative;
  width: 5.2vw;
  height: 5.2vw;
  margin: 3px;
}
.topMenu_source,
.topMenu_destination {
  margin: 1.5px 0px;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
