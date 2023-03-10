<template>
  <div class="paySuccessPage_container">
    <MenuBar></MenuBar>
    <div class="paySuccessPage_content">
      <img src="../assets/images/dice1.png" alt="" width="76" height="76" />
      <div class="paySuccessPage_message">결제 완료</div>
      <div class="paySuccessPage_info">대형 4시간</div>
      <progressMenu></progressMenu>
      <noticeBox class="paySuccessPage_noticeBox"></noticeBox>
      <button class="paySuccessPage_button">보관함 열기</button>
    </div>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue';
import progressMenu from '../components/progressMenu4.vue';
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
.paySuccessPage_container {
  width: 100vw;
  position: absolute;
  top: 20px;
}
.paySuccessPage_content {
  margin-top: 20vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/39px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: center;
  font: normal normal bold 30px/39px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.paySuccessPage_message {
  margin: 7vw 0vw 1vw;
}
.paySuccessPage_info {
  padding-bottom: 4.5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal normal 16px/21px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69); */
  font: normal normal normal 16px/21px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.paySuccessPage_noticeBox {
  margin-left: 11.5vw;
}
.paySuccessPage_button {
  border: none;
  margin-bottom: 5vw;
  /* Layout Properties */
  width: 84vw;
  height: 11.5vw;
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
