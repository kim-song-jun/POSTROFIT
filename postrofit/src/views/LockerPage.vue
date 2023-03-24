<template>
  <div class="lockerPage_container">
    <div class="lockerPage_content">
      <div class="lockerPage_station">
        <div class="lockerPage_station_name">2호선 사당A</div>
        <div class="lockerPage_station_location">
          서울특별시 동작구 남부순환로 지하2089
        </div>
      </div>
      <lockerInfo />
      <noticeBox class="lockerPage_noticeBox"></noticeBox>
      <button
        class="lockerPage_button"
        @click="$router.push('/SelectPage/checkDeliveryPage')"
      >
        옮길게요
      </button>
    </div>
  </div>
</template>

<script>
import lockerInfo from '../components/lockerInfo.vue';
import noticeBox from '../components/noticeBox.vue';

export default {
  components: {
    lockerInfo,
    noticeBox,
  },
};
</script>

<style>
.lockerPage_content {
  overflow: scroll;
  height: 92.7vh;
  scrollbar-width: none;
}
.lockerPage_content::-webkit-scrollbar {
  display: none;
}
.lockerPage_station {
  margin: 4vh 0vw 0vh 10vw;
}
.lockerPage_station_name {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.lockerPage_station_location {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal normal 10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
.lockerPage_noticeBox {
  width: 83vw;
}
.lockerPage_button {
  border: none;
  display: block;
  margin: 5.6vh auto 3vh;
  /* Layout Properties */
  width: 83vw;
  height: 5.5vh;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 2vw;
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: center;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
</style>
