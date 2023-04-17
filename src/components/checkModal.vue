<template>
  <div class="checkModal_blackBg">
    <div class="checkModal_container">
      <div class="checkModal_title">주의사항</div>
      <div class="checkModal_warning">옮길게요</div>
      <div class="checkModal_content">
        <div class="checkModal_line">
          <img
            class="checkModal_image"
            src="@/assets/images/dice1.png"
            alt=""
          /><span class="checkModal_point">출발역</span>과
          <span class="checkModal_point">도착역</span>을 확인해 주세요.
        </div>
        <div class="checkModal_line">
          <img
            class="checkModal_image"
            src="@/assets/images/dice1.png"
            alt=""
          /><span class="checkModal_point">분실 및 파손</span>에 주의해 주세요.
        </div>
        <div class="checkModal_line">
          <img
            class="checkModal_image"
            src="@/assets/images/dice1.png"
            alt=""
          /><span
            >물품에 문제가 생겼을 때는 빠르게
            <a class="checkModal_underline" href="">고객센터</a>로 연락주세요.
          </span>
        </div>
      </div>
      <div class="checkModal_check_btn">
        <span class="checkModal_warning">
          <input type="checkbox" name="agree" />
          *동의함
        </span>
      </div>
      <button class="checkModal_button" @click="$emit('closeCheckModal')">
        닫기
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.checkModal_blackBg {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.6);
}
.checkModal_container {
  margin: 50vw 6vw;
  /* Layout Properties */
  width: 88vw;
  height: 93vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 2.5vw;
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
.checkModal_title {
  padding: 10.5vw 0vw 2.5vw;
}
.checkModal_warning {
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
.checkModal_content {
  margin: 10vw 10vw 0vw;
}
.checkModal_content,
.checkModal_underline {
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
.checkModal_point {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-14) / var(--unnamed-line-spacing-19)
    var(--unnamed-font-family-segoe-ui);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 14px/19px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
}
.checkModal_line {
  margin-bottom: 2.5vw;
}
.checkModal_image {
  width: 4.5vw;
  height: 4.5vw;
  padding: 0.5vw 1vw 0vw 0vw;
}
.checkModal_button {
  border: none;
  /* Layout Properties */
  width: 62vw;
  height: 11.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 2vw;
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-26)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: center;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.checkModal_button:disabled {
  opacity: 0.5;
}
</style>
