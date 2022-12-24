<template>
  <div class="historyLocker_container">
    <div class="userPage_top">
      <div class="userPage_arrow">
        <div class="userPage_arrow_top"></div>
        <div class="userPage_arrow_bottom"></div>
      </div>
      <div class="userPage_text1 userPage_top_text">내 정보</div>
    </div>
    <div class="historyActive_info_container">
      <div class="historyActive_info userPage_text1">
        내 보관함
        <div class="userPage_text2">현재 이용하는 보관함 정보</div>
      </div>
    </div>
    <div class="lockerPage_station">
      <div class="historyLocker_line">2</div>
      <div class="lockerPage_station_name">
        <div class="lockerPage_station_location">
          서울특별시 동작구 남부순환로 지하2089
        </div>
        2호선 사당A
      </div>
    </div>
    <lockerInfoHistory></lockerInfoHistory>
    <div class="historyLocker_detail_container">
      <div class="userPage_text">
        요금:
        <span class="userPage_point_text">2000원</span> / 4시간
      </div>
      <div class="usingLocker_empty"></div>
      <div class="userPage_text">
        사이즈:
        <span class="userPage_point_text">중형</span>
      </div>
      <div class="usingLocker_empty2"></div>
      <div class="userPage_text4">보관 기간</div>
      <div class="userPage_text3 usingLocker_time">
        2022/10/16 <span class="userPage_point_text">12:12:13</span> ~
      </div>
      <div class="userPage_text4 usingLocker_term">현재까지</div>
    </div>
    <noticeBox class="lockerPage_noticeBox"></noticeBox>
    <div class="movePost_button_container">
      <button class="movePost_button">보관함 열기</button>
    </div>
  </div>
</template>

<script>
import lockerInfoHistory from "../components/lockerInfoHistory.vue";
import noticeBox from "../components/noticeBox.vue";

export default {
  components: {
    lockerInfoHistory,
    noticeBox,
  },
};
</script>

<style>
.userPage_text {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal normal 18px/24px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userPage_text1 {
  /* UI Properties */
  font: normal normal bold 20px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userPage_text2 {
  /* UI Properties */
  font: normal normal normal 10px/13px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userPage_text3 {
  /* UI Properties */
  font: normal normal normal 20px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userPage_text4 {
  /* UI Properties */
  font: normal normal normal 16px/21px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userPage_point_text {
  color: #6fbb69;
}
.usingLocker_empty {
  height: 1.8vw;
  width: 100%;
}
.usingLocker_empty2 {
  height: 5vw;
  width: 100%;
}
.userPage_top {
  height: 15vw;
  display: flex;
  align-items: center;
}
.userPage_arrow {
  margin-left: 7.5vw;
  position: relative;
  height: 5vw;
  width: 3vw;
}
.userPage_arrow_top,
.userPage_arrow_bottom {
  background-color: #666;
  height: 2px;
  left: 0.8vw;
  position: absolute;
  top: 50%;
  width: 100%;
}
.userPage_arrow_top {
  transform: rotate(-45deg);
  transform-origin: bottom left;
}
.userPage_arrow_bottom {
  transform: rotate(45deg);
  transform-origin: top left;
}
.userPage_top_text {
  margin-left: 32vw;
}
.historyActive_info_container {
  display: flex;
  align-items: center;
  position: relative;
  /* Layout Properties */
  width: 100vw;
  height: 20vw;
  /* UI Properties */
  /* background: var(--unnamed-color-fbfbfb) 0% 0% no-repeat padding-box; */
  background: #fbfbfb 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.historyActive_info {
  margin-left: 10.5vw;
}
.lockerPage_station {
  margin: 7vw 0vw 0vw 10vw;
  display: flex;
}
.historyLocker_line {
  margin-right: 3.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Layout Properties */
  width: 8.8vw;
  height: 8.8vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  border-radius: 4.5vw;
  opacity: 1;
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-26) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.lockerPage_station_name {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-26) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal normal 20px/26px Roboto;
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
.historyLocker_detail_container {
  margin: 0vw auto;
  width: 78vw;
}
.usingLocker_term {
  text-align: right;
}
.usingLocker_time {
  margin: 0vw auto;
  width: 54vw;
}
.lockerPage_noticeBox {
  margin-left: 10.5vw;
}
.movePost_button {
  border: none;
  display: block;
  margin: 15vw auto 5vw;
  /* Layout Properties */
  width: 88vw;
  height: 12vw;
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
