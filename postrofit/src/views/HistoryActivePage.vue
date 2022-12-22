<template>
  <div class="historyActive_container">
    <div class="userPage_top">
      <div class="userPage_arrow">
        <div class="userPage_arrow_top"></div>
        <div class="userPage_arrow_bottom"></div>
      </div>
      <div class="userPage_text1 userPage_top_text">내 정보</div>
    </div>
    <div class="historyActive_info_container">
      <div class="historyActive_info userPage_text1">
        이용내역
        <div class="userPage_text2">현재 이용하고 있는 정보</div>
      </div>
      <div class="historyActive_cancel_container">
        <a class="historyActive_cancel" href="">취소하기</a>
      </div>
    </div>
    <locationBoxActive></locationBoxActive>
    <progressMenu></progressMenu>
    <noticeBox class="historyActive_noticeBox"></noticeBox>
    <div class="movePost_button_container">
      <button class="movePost_button">보관함 열기</button>
    </div>
  </div>
</template>

<script>
import locationBoxActive from "@/components/locationBoxActive.vue";
import progressMenu from "@/components/progressMenu.vue";
import noticeBox from "@/components/noticeBox.vue";

export default {
  components: {
    locationBoxActive,
    progressMenu,
    noticeBox,
  },
};
</script>

<style>
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
.historyActive_cancel {
  margin-left: 36vw;
  /* UI Properties */
  /* text-decoration: var(--unnamed-decoration-underline);
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-14) / var(--unnamed-line-spacing-19)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  font: normal normal bold 14px/19px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.historyActive_noticeBox {
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
</style>
