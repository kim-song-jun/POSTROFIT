<template>
  <div class="progressMenu_container">
    <div class="progressMenu_menu">
      <div class="progressMenu_circle">01</div>
      <div class="progressMenu_desc">
        출발역 선택
        <div class="progressMenu_desc_sub">
          장소, 사이즈, 이용금액, 주의사항 확인
        </div>
      </div>
    </div>
    <div class="progressMenu_menu">
      <div class="progressMenu_circle progressMenu_check">02</div>
      <div class="progressMenu_desc">
        물품 선택
        <div class="progressMenu_desc_sub">
          장소, 사이즈, 이용금액, 주의사항 확인
        </div>
      </div>
    </div>
    <div class="progressMenu_menu">
      <div class="progressMenu_circle">03</div>
      <div class="progressMenu_desc">
        보관함 열기
        <div class="progressMenu_desc_sub">
          장소, 사이즈, 이용금액, 주의사항 확인
        </div>
      </div>
    </div>
    <div class="progressMenu_menu">
      <div class="progressMenu_circle">04</div>
      <div class="progressMenu_desc">
        배송 중
        <div class="progressMenu_desc_sub">
          장소, 사이즈, 이용금액, 주의사항 확인
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.progressMenu_container {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding: 48px;
  margin: 40px 0px 0px;
}
.progressMenu_menu {
  display: flex;
  align-items: center;
  margin: 0px 0px 20px;
  /* justify-content: center; */
  /* Layout Properties */
  /* top: 477px; */
  /* left: 155px; */
  width: 221px;
  height: 42px;
  /* UI Properties */
  opacity: 1;
}
.progressMenu_circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  margin: 0px 13px 0px 0px;
  /* Layout Properties */
  /* top: 477px; */
  /* left: 155px; */
  width: 37px;
  height: 37px;
  /* UI Properties */
  background: var(--unnamed-color-707070) 0% 0% no-repeat padding-box;
  background: #707070 0% 0% no-repeat padding-box;
  opacity: 1;

  /* Layout Properties */
  /* top: 482px; */
  /* left: 163px; */
  /* width: 23px; */
  /* height: 26px; */
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.progressMenu_check {
  background-color: #6fbb69;
}
.progressMenu_desc {
  /* Layout Properties */
  /* top: 539px; */
  /* left: 206px; */
  /* width: 156px; */
  /* height: 33px; */
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.progressMenu_desc_sub {
  /* Layout Properties */
  /* top: 572px; */
  /* left: 206px; */
  /* width: 166px; */
  /* height: 14px;  */
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal normal 10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf);
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
</style>
