<template>
  <div class="lockerModal_blackBg">
    <div class="lockerModal_container">
      <div class="lockerModal_title">보관함 번호</div>
      <div class="lockerModal_warning">
        *타인에게 노출되지 않도록 주의하세요
      </div>
      <div class="lockerModal_location">강남A 3번 보관함</div>
      <div class="lockerModal_passwd">3145</div>
      <button class="lockerModal_button">닫기</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.lockerModal_blackBg {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.6);
}
.lockerModal_container {
  margin: 48.8vw auto 0vw;
  /* Layout Properties */
  width: 89vw;
  height: 92.8vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 2.5vw;
  opacity: 1;
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
.lockerModal_title {
  padding: 10.5vw 0vw 2.5vw;
}
.lockerModal_warning {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal normal 16px/21px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69); */
  text-align: center;
  font: normal normal normal 16px/21px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.lockerModal_location {
  margin: 13.5vw 0vw 2.5vw;
}
.lockerModal_passwd {
  margin-bottom: 11vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/39px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69); */
  text-align: center;
  font: normal normal bold 30px/39px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.lockerModal_button {
  border: none;
  /* Layout Properties */
  width: 69.2vw;
  height: 11.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  border-radius: 1.5vw;
  opacity: 1;
  /* UI Properties */
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
