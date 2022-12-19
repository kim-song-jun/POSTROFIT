<template>
  <div class="mainPage_container">
    <TopMenu></TopMenu>
    <bottomMenu></bottomMenu>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
// import StationSelect from "../components/stationSelect.vue";
import bottomMenu from "../components/bottomMenu.vue";

export default {
  components: {
    TopMenu,
    // StationSelect,
    bottomMenu,
  },
};
</script>

<style></style>
