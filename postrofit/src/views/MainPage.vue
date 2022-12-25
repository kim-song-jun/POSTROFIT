<template>
  <div class="mainPage_container">
    <TopMenu></TopMenu>
    <line-2></line-2>
    <transition name="fade">
      <bottomMenu v-if="this.$store.state.clicked"></bottomMenu>
    </transition>
  </div>
</template>

<script>
import "animate.css";
import TopMenu from "../components/TopMenu.vue";
import bottomMenu from "../components/bottomMenu.vue";
import Line2 from "@/components/SubWay/Line2.vue";
export default {
  components: {
    TopMenu,
    bottomMenu,
    Line2,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
