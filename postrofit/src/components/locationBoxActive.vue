<template>
  <div class="locationBox_container">
    <div class="locationBoxActive_src locationBox_clicked">
      <div class="locationBoxActive_text1">출발</div>
      <div class="locationBox_text2">2호선 <span>사당</span></div>
      <div class="locationBoxActive_text3">
        서울특별시 동작구 남부순환로 지하2089
      </div>
    </div>
    <div class="locationBox_arrow_container">
      <img class="locationBox_arrow" src="@/assets/images/arrow.png" alt="" />
    </div>
    <div class="locationBoxActive_dst">
      <div class="locationBoxActive_text1">도착</div>
      <div class="locationBox_text2">2호선 <span>강남</span></div>
      <div class="locationBoxActive_text3">
        서울특별시 동작구 남부순환로 지하2089
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.locationBox_container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vw;
}
.locationBoxActive_src,
.locationBoxActive_dst {
  text-align: center;
  /* Layout Properties */
  width: 34vw;
  height: 41vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-6fbb69); */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 5vw;
  opacity: 1;
}
.locationBox_clicked {
  border: 1px solid #6fbb69;
}
.locationBox_arrow {
  width: 5vw;
  height: 3vw;
  margin: 0vw 6vw;
}
.locationBoxActive_text1 {
  margin-top: 3.5vw;
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
.locationBoxActive_text3 {
  width: 23vw;
  margin: 0vw auto;
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
