<template>
  <div class="bottomLocker_container">
    <MenuBar></MenuBar>
    <div class="bottomLocker_stations">
      <div class="bottomLocker_stations_sub">
        <div class="bottomLocker_stations_start">방배</div>
        <div class="bottomLocker_stations_end">낙성대</div>
      </div>
      <div class="bottomLocker_stations_main">사당</div>
    </div>
    <div class="bottomLocker_usable">
      <div class="bottomLocker_img_container">
        <img src="../assets/images/dice1.png" alt="" width="35" height="35" />
        보관할게요
      </div>
      <div class="bottomLocker_large">대형 0개</div>
      ,
      <div class="bottomLocker_middle">중형 5개</div>
      ,
      <div class="bottomLocker_small">소형 10개</div>
      사용가능
    </div>
  </div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";

export default {
  components: {
    MenuBar,
  },
};
</script>

<style>
.bottomLocker_stations {
  margin: 22px 0px 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottomLocker_stations_sub {
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Layout Properties */
  /* top: 796px; */
  /* left: 50px; */
  width: 320px;
  height: 18px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-6fbb69);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #6fbb69;
  border-radius: 30px;
  opacity: 1;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69);
  /* text-align: left; */
  font: normal normal bold 10px/13px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.bottomLocker_stations_main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* Layout Properties */
  /* top: 787px; */
  /* left: 143px; */
  width: 134px;
  height: 36px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-ffffff);
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #ffffff;
  border-radius: 20px;
  opacity: 1;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fafafa);
  /* text-align: center; */
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #fafafa;
  opacity: 1;
}
.bottomLocker_usable {
  display: flex;
  align-items: center;
  justify-content: center;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    16px/21px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
  opacity: 1;
  color: #707070;
}
.bottomLocker_img_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px 0px 0px;
  /* Layout Properties */
  /* top: 885px; */
  /* left: 25px; */
  /* width: 40px; */
  /* height: 13px; */
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 10px/13px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.bottomLocker_large {
  color: #d04040;
}
</style>
