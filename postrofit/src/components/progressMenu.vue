<template>
  <div class="progressMenu_container">
    <div class="progressMenu_graybar"></div>
    <div class="progressMenu_menu">
      <div class="progressMenu_desc">{{ progress[0] }}</div>
      <div class="progressMenu_circle">01</div>
    </div>
    <div class="progressMenu_menu">
      <!-- <div class="progressMenu_desc">물품 선택</div> -->
      <!-- <div class="progressMenu_circle">02</div> -->
      <div class="progressMenu_check">02</div>
    </div>
    <div class="progressMenu_menu">
      <div class="progressMenu_desc">{{ progress[2] }}</div>
      <div class="progressMenu_circle">03</div>
    </div>
    <div class="progressMenu_menu">
      <div class="progressMenu_desc">{{ progress[3] }}</div>
      <div class="progressMenu_circle">04</div>
    </div>
  </div>
  <div class="progressMenu_desc_container">
    <div class="progressMenu_now">{{ progress[1] }}</div>
    <div class="progressMenu_desc_sub">
      장소, 사이즈, 이용금액, 주의사항 확인
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: ['출발역 선택', '물품 선택', '보관함 열기', '배송 중'],
    };
  },
};
</script>

<style>
.progressMenu_container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12.5vw 12.5vw 2vw;
}
.progressMenu_graybar {
  position: absolute;
  top: 26.5vw;
  left: 8.5vw;
  z-index: -1;
  /* Layout Properties */
  width: 83vw;
  height: 2vw;
  /* UI Properties */
  /* background: var(--unnamed-color-d8d6d6) 0% 0% no-repeat padding-box; */
  background: #d8d6d6 0% 0% no-repeat padding-box;
  border-radius: 30vw;
  opacity: 1;
}
.progressMenu_menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Layout Properties */
  /* width: 350px; */
  /* UI Properties */
  opacity: 1;
}
.progressMenu_circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5vw;
  margin: 0vw 6.5vw;
  /* Layout Properties */
  width: 9.5vw;
  height: 9.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-707070) 0% 0% no-repeat padding-box; */
  background: #707070 0% 0% no-repeat padding-box;
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: left;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.progressMenu_desc {
  padding: 0vw 0vw 2vw;
  min-width: 60px;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: center;
  font: normal normal bold 12px/19px Roboto;
  letter-spacing: 0px;
  color: #9b9b9b;
  opacity: 1;
}
.progressMenu_check {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6fbb69;
  /* margin-top: 34px; */
  margin: 9vw 3.5vw 0px;
  /* Layout Properties */
  width: 13vw;
  height: 13vw;
  border-radius: 7vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.progressMenu_desc_container {
  width: 51vw;
  height: 12vw;
  margin-left: 13vw;
}
.progressMenu_now {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: center;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.progressMenu_desc_sub {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-10) /
    var(--unnamed-line-spacing-13) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  text-align: center;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
</style>
