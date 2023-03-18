<template>
  <div class="topMenu_container">
    <div class="topMenu_content">
      <img
        class="topMenu_user_circle"
        src="../assets/images/user.png"
        alt=""
        @click="$router.push('/UserPage')"
      />
      <div class="topMenu_bar"></div>
      <div class="topMenu_stations">
        <p class="topMenu_source">
          {{ getStationName($store.state.StartStation) }}
        </p>
        <img class="topMenu_arrow" src="../assets/images/arrow.png" alt="" />
        <p class="topMenu_destination">
          {{ getStationName($store.state.EndStation) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    getStationName(station) {
      if (station.name != null && station.name != undefined) {
        return station.name;
      }
      return '';
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
}
.topMenu_content {
  width: 86vw;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: absolute;
  /* Layout Properties */
  top: 5vw;
  left: 4vw;
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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.topMenu_bar {
  border-right: 1.5px darkgray solid;
  height: 7.5vw;
  margin: 0vw 2.5vw;
}
.topMenu_arrow {
  width: 6.2vw;
  height: 4.2vw;
}
.topMenu_source,
.topMenu_destination {
  margin: 0;
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
