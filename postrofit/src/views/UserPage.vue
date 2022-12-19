<template>
  <div class="userPage_container">
    <div class="userPage_top">
      <div class="userPage_arrow">
        <div class="userPage_arrow_top"></div>
        <div class="userPage_arrow_bottom"></div>
      </div>
      <div class="userPage_text1 userPage_top_text">내 정보</div>
    </div>
    <div class="userPage_info">
      <div class="userPage_profile_container">
        <img class="userPage_image" src="@/assets/images/user.png" alt="" />
      </div>
      <div class="userPage_name_container">
        <div class="userPage_name">{{ nickname }}</div>
        <div class="userPage_name_sub">님</div>
      </div>
      <div class="userPage_modify_btn userPage_text2">수정하기</div>
    </div>
    <div class="userPage_locker_container">
      <div class="userPage_textbox">
        <div class="userPage_text1">내 보관함</div>
        <div class="userPage_text2">현재 보관함 이용내역</div>
      </div>
      <usingLocker></usingLocker>
    </div>
    <div class="userPage_history_container">
      <div class="userPage_text1">이용내역</div>
      <div class="userPage_text2">최근 10일간 이용내역</div>
      <div class="userPage_history_content">
        <historyReceipt></historyReceipt>
      </div>
    </div>
  </div>
</template>

<script>
import historyReceipt from "../components/historyReceipt.vue";
import usingLocker from "../components/usingLocker.vue";

export default {
  components: {
    historyReceipt,
    usingLocker,
  },
  data() {
    return {
      nickname: "김성준",
    };
  },
};
</script>

<style>
.userPage_container {
  width: 100vw;
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
.userPage_arrow .userPage_arrow_top,
.userPage_arrow .userPage_arrow_bottom {
  background-color: #666;
  height: 2px;
  left: 0.8vw;
  position: absolute;
  top: 50%;
  width: 100%;
}
.userPage_arrow_top,
.userPage_arrow_bottom {
  background-color: #666;
  height: 1px;
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
.userPage_info {
  display: flex;
  align-items: center;
  position: relative;
  /* Layout Properties */
  width: 100vw;
  height: 27vw;
  /* UI Properties */
  /* background: var(--unnamed-color-fbfbfb) 0% 0% no-repeat padding-box; */
  background: #fbfbfb 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.userPage_profile_container {
  width: 11.5vw;
  height: 11.5vw;
  margin-left: 9vw;
}
.userPage_image {
  width: 100%;
  height: 100%;
}
.userPage_name_container {
  display: flex;
  position: absolute;
  left: 52vw;
  top: 6vw;
}
.userPage_name {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-36) / var(--unnamed-line-spacing-39)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 36px/39px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.userPage_name_sub {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-39)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 30px/39px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.userPage_modify_btn {
  position: absolute;
  left: 75vw;
  top: 19vw;
}
.userPage_locker_container {
  width: 83vw;
  height: 75vw;
  margin: 7vw 0vw 0vw 8.5vw;
}
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
.userPage_text5 {
  /* UI Properties */
  font: normal normal bold 10px/13px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userPage_point_text {
  /* UI Properties */
  color: #6fbb69;
}
.usingLocker_line_container {
  color: #ffffff;
}
.usingLocker_term {
  text-align: right;
}
.userPage_history_container {
  width: 83vw;
  margin: 7vw 0vw 0vw 8.5vw;
}
</style>
