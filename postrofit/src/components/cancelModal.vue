<template>
  <div class="cancelModal_blackBg">
    <div class="cancelModal_container">
      <div class="cancelModal_title">취소하기</div>
      <div class="cancelModal_warning">*약관을 잘 읽어주세요</div>
      <locationBox></locationBox>
      <div class="cancelModal_info">
        <div class="cancelModal_text4">
          요금: <span class="cancelModal_size">2000원</span>
        </div>
        <div class="cancelModal_text4">
          사이즈: <span class="cancelModal_price">소형</span>
        </div>
      </div>
      <noticeBox></noticeBox>
      <button class="cancelModal_button" disabled>닫기</button>
    </div>
  </div>
</template>

<script>
import locationBox from "../components/locationBox.vue";
import noticeBox from "../components/noticeBox.vue";

export default {
  components: {
    locationBox,
    noticeBox,
  },
};
</script>

<style>
.cancelModal_blackBg {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.6);
}
.cancelModal_container {
  margin: 23vw 6vw;
  /* Layout Properties */
  width: 88vw;
  height: 182vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 2.5vw;
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
.cancelModal_title {
  padding: 10.5vw 0vw 2.5vw;
}
.cancelModal_warning {
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
.cancelModal_button {
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
.cancelModal_button:disabled {
  opacity: 0.5;
}
.cancelModal_text4 {
  margin-bottom: 2.5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.cancelModal_size,
.cancelModal_price {
  color: #6fbb69;
}
</style>
