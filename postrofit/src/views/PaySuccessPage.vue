<template>
  <div class="paySuccessPage_container">
    <MenuBar></MenuBar>
    <div class="paySuccessPage_content">
      <img src="../assets/images/dice1.png" alt="" width="76" height="76" />
      <p class="paySuccessPage_message">결제 완료</p>
      <p class="paySuccessPage_info">대형 4시간</p>
    </div>
    <EntrustMenu></EntrustMenu>
    <button class="paySuccessPage_button">보관함 열기</button>
  </div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import EntrustMenu from "../components/entrustMenu.vue";

export default {
  components: {
    MenuBar,
    EntrustMenu,
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
  margin: 130px 0px 0px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/39px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: center;
  font: normal normal bold 30px/39px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.paySuccessPage_message {
  margin: 20px 0px 4px;
}
.paySuccessPage_info {
  margin: 0;
  padding: 0px 0px 25px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal normal 16px/21px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69);
  font: normal normal normal 16px/21px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.paySuccessPage_button {
  border: none;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  /* display: block; */
  /* margin: 38px auto 20px; */
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
