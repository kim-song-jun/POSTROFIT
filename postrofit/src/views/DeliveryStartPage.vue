<template>
  <div class="deliveryStartPage_container">
    <MenuBar></MenuBar>
    <div class="deliveryStartPage_content">
      <div class="deliveryStartPage_station">
        2호선 사당A
        <img src="../assets/images/arrow.png" alt="" width="25" height="17" />
        2호선 강남A
      </div>
      요금:
      <div class="deliveryStartPage_price">2000원</div>
      <br />
      사이즈:
      <div class="deliveryStartPage_size">소형</div>
    </div>
    <ProgressMenu></ProgressMenu>
    <p class="deliveryStartPage_warning">주의사항</p>
    <p class="deliveryStartPage_warning_desc">
      1.출발역과 도착역을 잘 확인해주세요. <br />
      2.분실/파손에 주의해주세요.<br />
      3.물품에 문제가 생겼을 때는 빠르게 고객센터로 연락주세요.
    </p>
    <div class="deliveryStartPage_button_container">
      <button class="deliveryStartPage_button">옮길게요</button>
    </div>
  </div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import ProgressMenu from "../components/progressMenu.vue";

export default {
  components: {
    MenuBar,
    ProgressMenu,
  },
};
</script>

<style>
.deliveryStartPage_container {
  width: 100vw;
  position: absolute;
  top: 20px;
}
.deliveryStartPage_content {
  width: 330px;
  margin: 60px auto 30px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.deliveryStartPage_image {
  margin: 0px 140px;
  width: 50px;
  height: 50px;
}
.deliveryStartPage_station {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.deliveryStartPage_price,
.deliveryStartPage_size {
  display: inline-block;
  margin-bottom: 10px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
}
.deliveryStartPage_warning {
  margin: 0px auto;
  width: 334px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.deliveryStartPage_warning_desc {
  margin: 15px auto;
  padding: 10px;
  width: 334px;
  /* UI Properties */
  background: #e4e4e4 0% 0% no-repeat padding-box;
  border-radius: 7px;
  font: var(--unnamed-font-style-normal) normal normal
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal normal 16px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.deliveryStartPage_button {
  border: none;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  /* display: block; */
  /* margin: 40px auto 20px; */
  /* Layout Properties */
  /* top: 860px; */
  /* left: 43px; */
  width: 334px;
  height: 46px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  background: #6fbb69 0% 0% no-repeat padding-box;
  border-radius: 7px;
  opacity: 1;
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
