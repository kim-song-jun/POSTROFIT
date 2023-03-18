<template>
  <div class="noticeBox_container">
    <div class="noticeBox_title">주의사항</div>
    <div class="noticeBox_box">
      <div class="noticeBox_line">
        <img
          class="noticeBox_image"
          src="@/assets/images/dice1.png"
          alt=""
        /><span class="noticeBox_box_bold">출발역</span>과
        <span class="noticeBox_box_bold">도착역</span>을 확인해 주세요.
      </div>
      <div class="noticeBox_line">
        <img
          class="noticeBox_image"
          src="@/assets/images/dice1.png"
          alt=""
        /><span class="noticeBox_box_bold">분실 및 파손</span>에 주의해 주세요.
      </div>
      <div class="noticeBox_line">
        <img
          class="noticeBox_image"
          src="@/assets/images/dice1.png"
          alt=""
        /><span
          >물품에 문제가 생겼을 때는 빠르게
          <a class="noticeBox_underline" href="">고객센터</a>로 연락주세요.
        </span>
      </div>
    </div>
    <div v-if="1" class="noticeBox_check_btn">
      <span class="noticeBox_warning">
        <input type="checkbox" name="agree" />
        *동의함
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.noticeBox_container {
  width: auto;
  margin: 8vw auto;
}
.noticeBox_warning {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-19) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69); */
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.noticeBox_title {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-21) / var(--unnamed-line-spacing-28)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 21px/28px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.noticeBox_box {
  margin-top: 3.5vw;
  padding: 2.3vh 3vw 2vh;
  /* Layout Properties */
  height: 16.2vh;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 2.5vw;
  opacity: 1;
}
.noticeBox_box,
.noticeBox_underline {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal normal 14px/19px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
}
.noticeBox_line {
  margin-bottom: 2.5vw;
}
.noticeBox_image {
  width: 4.5vw;
  height: 4.5vw;
  padding: 0.5vw 1vw 0vw 0vw;
}
.noticeBox_box_bold {
  font-weight: bold;
}
.noticeBox_check_btn {
  text-align: left;
}
</style>
