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
import 'animate.css';
import TopMenu from '../components/TopMenu.vue';
import bottomMenu from '../components/bottomMenu.vue';
import Line2 from '@/components/SubWay/Line2.vue';
export default {
  components: {
    TopMenu,
    bottomMenu,
    Line2,
  },
};
</script>

<style>
.mainPage_container {
}
</style>
