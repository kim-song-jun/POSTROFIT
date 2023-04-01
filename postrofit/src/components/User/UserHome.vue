<template>
  <div class="userHome_container">
    <div class="userHome_info">
      <div class="userHome_profile_container">
        <img class="userHome_image" src="@/assets/images/user.png" alt="" />
      </div>
      <div class="userHome_name_container">
        <div class="userHome_name">{{ nickname }}</div>
        <div class="userHome_name_sub">님</div>
      </div>
      <div class="userHome_modify_btn userHome_text2">수정하기</div>
    </div>
    <div class="userHome_locker_container">
      <div class="userHome_textbox">
        <div class="userHome_text1">내 보관함</div>
        <div class="userHome_text2">현재 보관함 이용내역</div>
      </div>
      <usingLocker />
    </div>
    <div class="userHome_history_container">
      <div class="userHome_text1">이용내역</div>
      <div class="userHome_text2">최근 10일간 이용내역</div>
      <div class="userHome_history_content">
        <historyAbout />
      </div>
    </div>
  </div>
</template>

<script>
import historyAbout from './historyAbout.vue';
import usingLocker from '../usingLocker.vue';

export default {
  components: {
    historyAbout,
    usingLocker,
  },
  data() {
    return {
      nickname: '김성준',
    };
  },
};
</script>

<style>
.userHome_container {
  width: 100vw;
  overflow: scroll;
  height: 92.2vh;
  /* 파이어폭스 */
  scrollbar-width: none;
}
/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
.userHome_container::-webkit-scrollbar {
  display: none;
}
.userHome_info {
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
.userHome_profile_container {
  width: 11.5vw;
  height: 11.5vw;
  margin-left: 9vw;
}
.userHome_image {
  width: 100%;
  height: 100%;
}
.userHome_name_container {
  display: flex;
  position: absolute;
  left: 52vw;
  top: 6vw;
}
.userHome_name {
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
.userHome_name_sub {
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
.userHome_modify_btn {
  position: absolute;
  left: 75vw;
  top: 19vw;
}
.userHome_locker_container {
  width: 83vw;
  /* height: 75vw; */
  margin: 7vw auto 0vw;
}
.userHome_text {
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
.userHome_text1 {
  /* UI Properties */
  font: normal normal bold 20px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_text2 {
  /* UI Properties */
  font: normal normal normal 10px/13px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_text3 {
  /* UI Properties */
  font: normal normal normal 20px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_text4 {
  /* UI Properties */
  font: normal normal normal 16px/21px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_text5 {
  /* UI Properties */
  font: normal normal bold 10px/13px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_point_text {
  /* UI Properties */
  color: #6fbb69;
}
.usingLocker_line_container {
  color: #ffffff;
}
.usingLocker_term {
  text-align: right;
}
.userHome_history_container {
  width: 83vw;
  margin: 7vw auto;
}
</style>
