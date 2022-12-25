<template>
  <div class="mainPage_container">
    <TopMenu></TopMenu>
    <line-2></line-2>
    <bottomMenu v-if="this.$store.state.SelectedStation.clicked"></bottomMenu>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
// import StationSelect from "../components/stationSelect.vue";
import bottomMenu from "../components/bottomMenu.vue";
import Line2 from "@/components/SubWay/Line2.vue";
export default {
  components: {
    TopMenu,
    // StationSelect,
    bottomMenu,
    Line2,
  },
};
</script>

<style></style>
