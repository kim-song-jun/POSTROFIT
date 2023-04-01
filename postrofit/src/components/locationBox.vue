<template>
  <div class="locationBox_container">
    <div class="locationBox_src">
      <div class="locationBox_text1">출발</div>
      <div class="locationBox_text2">
        2호선 <span>{{ startStation }}</span>
      </div>
      <div class="locationBox_text3">서울특별시 동작구 남부순환로 지하2089</div>
    </div>
    <div class="locationBox_arrow_container">
      <img class="locationBox_arrow" src="@/assets/images/arrow.png" alt="" />
    </div>
    <div class="locationBox_dst">
      <div class="locationBox_text1">도착</div>
      <div class="locationBox_text2">
        2호선 <span>{{ endStation }}</span>
      </div>
      <div class="locationBox_text3">서울특별시 동작구 남부순환로 지하2089</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startStation: String,
    endStation: String,
  },
};
</script>

<style>
.locationBox_container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9vw;
  margin-bottom: 5vw;
}
.locationBox_arrow {
  width: 5vw;
  height: 3vw;
  margin: 0vw 6vw;
}
.locationBox_text1 {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-32) / var(--unnamed-line-spacing-43)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  font: normal normal bold 32px/43px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.locationBox_text2 {
  margin: 2.5vw 0vw 1vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-26) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.locationBox_text3 {
  width: 23vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-10) /
    var(--unnamed-line-spacing-13) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
</style>
