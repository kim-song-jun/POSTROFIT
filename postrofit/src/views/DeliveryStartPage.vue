<template>
  <div class="deliveryStartPage_container">
    <MenuBar></MenuBar>
    <div class="deliveryStartPage_content">
      <locationBox></locationBox>
      <div class="deliveryStartPage_text">
        요금: <span class="deliveryStartPage_point">2000원</span>
      </div>
      <div class="deliveryStartPage_text">
        사이즈: <span class="deliveryStartPage_point">소형</span>
      </div>
    </div>
    <ProgressMenu></ProgressMenu>
    <noticeBox class="deliveryStartPage_noticeBox"></noticeBox>
    <div class="deliveryStartPage_button_container">
      <button class="deliveryStartPage_button">옮길게요</button>
    </div>
  </div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import ProgressMenu from "../components/progressMenu3.vue";
import locationBox from "../components/locationBox.vue";
import noticeBox from "@/components/noticeBox.vue";

export default {
  components: {
    MenuBar,
    ProgressMenu,
    locationBox,
    noticeBox,
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
  width: 82.5vw;
  margin: 15vw auto 5.5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.deliveryStartPage_text {
  margin-left: 7vw;
  margin-bottom: 2.5vw;
}
.deliveryStartPage_point {
  color: #6fbb69;
}
.deliveryStartPage_noticeBox {
  margin-left: 10.5vw;
}
.deliveryStartPage_button {
  border: none;
  margin: 0vw 8vw 5vw;
  /* Layout Properties */
  width: 83.5vw;
  height: 11.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 2vw;
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
