<template>
  <div class="checkBill_container">
    <MenuBar />
    <div class="checkBill_content">
      <div class="movePost_location_container">
        <div class="movePost_location">2호선 사당A</div>
        <div class="movePost_location_sub">
          서울특별시 동작구 남부순환로 지하2089
        </div>
      </div>
      <div class="checkBill_info">
        <div class="checkBill_price">
          요금: <span class="checkBill_green">2000원</span> / 4시간
        </div>
        <div class="checkBill_size">
          사이즈: <span class="checkBill_green">대형</span>
        </div>
        <div class="checkBill_term">보관 기간</div>
        <div class="checkBill_date">
          2022/10/16
          <span class="checkBill_green">12:12:13</span> ~
        </div>
      </div>
      <progressMenu />
      <noticeBox class="checkBill_noticeBox"></noticeBox>
      <div class="movePost_button_container">
        <button class="movePost_button" disabled>옮길게요</button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue';
import progressMenu from '../components/progressMenu.vue';
import noticeBox from '../components/noticeBox.vue';

export default {
  components: {
    MenuBar,
    progressMenu,
    noticeBox,
  },
};
</script>

<style>
.checkBill_container {
  width: 100vw;
  height: 97.7vh;
  padding-top: 2.3vh;
}
.checkBill_content {
  overflow: scroll;
  height: 92.7vh;
  scrollbar-width: none;
}
.checkBill_content::-webkit-scrollbar {
  display: none;
}
.movePost_location_container {
  margin: 8vw 0vw;
  margin-right: 8vw;
  width: 47vw;
  height: 11vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) */
  /* var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) */
  /* var(--unnamed-font-family-roboto); */
  /* letter-spacing: var(--unnamed-character-spacing-0); */
  /* color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.checkBill_content {
  margin: 15vw 0vw 0vw 10.5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.checkBill_green {
  color: #6fbb69;
}
.checkBill_price {
  margin-bottom: 2.5vw;
}
.checkBill_size {
  margin-bottom: 5vw;
}
.movePost_location_sub {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-10) /
    var(--unnamed-line-spacing-13) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
.checkBill_noticeBox {
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
.movePost_button:disabled {
  opacity: 0.5;
}
</style>
