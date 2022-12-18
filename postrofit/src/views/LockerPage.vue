<template>
  <div class="lockerPage_container">
    <MenuBar></MenuBar>
    <div class="lockerPage_station">
      <div class="lockerPage_station_name">2호선 사당A</div>
      <div class="lockerPage_station_location">
        서울특별시 동작구 남부순환로 지하2089
      </div>
    </div>
    <LockerInfo></LockerInfo>
    <div class="lockerPage_price">
      <div class="lockerPage_location">이용요금</div>
      <div class="lockerPage_map"></div>
    </div>
    <div class="lockerPage_locker">
      <div class="lockerPage_location">시설 정보</div>
      <div class="lockerPage_map"></div>
    </div>
    <button class="lockerPage_button">옮길게요</button>
  </div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import LockerInfo from "../components/lockerInfo.vue";

export default {
  components: {
    MenuBar,
    LockerInfo,
  },
};
</script>

<style>
.lockerPage_container {
  width: 100vw;
  position: absolute;
  top: 20px;
}
.lockerPage_station {
  margin: 28px 0px 0px 41px;
}
.lockerPage_station_name {
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.lockerPage_station_location {
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal normal 10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf);
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
.lockerPage_locker,
.lockerPage_price {
  margin: 0px 0px 20px 41px;
}
.lockerPage_location {
  margin: 0px 0px 14px 0px;
  /* Layout Properties */
  /* top: 629px; */
  /* left: 41px; */
  /* width: 102px; */
  /* height: 33px; */
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.lockerPage_map {
  margin: 0px 0px 0px 2px;
  /* Layout Properties */
  /* top: 676px; */
  /* left: 40px; */
  width: 334px;
  height: 183px;
  /* UI Properties */
  background: var(--unnamed-color-e4e4e4) 0% 0% no-repeat padding-box;
  background: #e4e4e4 0% 0% no-repeat padding-box;
  border-radius: 7px;
  opacity: 1;
}
.lockerPage_button {
  border: none;
  display: block;
  margin: 38px auto 20px;
  /* Layout Properties */
  /* top: 897px; */
  /* left: 41px; */
  width: 335px;
  height: 46px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  background: #6fbb69 0% 0% no-repeat padding-box;
  border-radius: 7px;
  /* opacity: 1; */
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
</style>
