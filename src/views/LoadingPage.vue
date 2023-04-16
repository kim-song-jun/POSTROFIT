<template>
  <div class="LoadingPage-Container">
    <!-- option:: MAINPAGE_LOGO == loading Page에 사용되는 제일 큰 로고 -->
    <MainLogo :option="'MAINPAGE_LOGO'"></MainLogo>
    <div class="LoadingPage-Title">POSTROFIT</div>
    <div class="LoadingPage-SubIitle">지하철 용돈벌이</div>
  </div>
</template>

<script>
import MainLogo from '../components/Svg/mainLogo.vue';

export default {
  components: {MainLogo},
  mounted() {
    setTimeout(() => {
      console.log('LoadingPage.vue: mounted(');
      this.$router.push({path: '/MainPage'});
    }, 3000);
  },
};
</script>

<style scoped>
.LoadingPage-Container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.LoadingPage-Title {
  font-weight: bold;
  font-size: 32pt;
  margin-top: 7px;
}
.LoadingPage-SubIitle {
  font-size: 20pt;
  margin-top: 1px;
}
</style>
