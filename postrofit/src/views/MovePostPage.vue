<template>
  <div class="movePost_container">
    <MenuBar></MenuBar>
    <div class="movePost_location_container">
      <div class="movePost_location">2호선 사당A</div>
      <div class="movePost_location_sub">
        서울특별시 동작구 남부순환로 지하2089
      </div>
    </div>
    <div class="movePost_sizebox_container">
      <div class="movePost_sizebox movePost_sizebox_clicked">
        <div class="movePost_sizebox_type">소형</div>
        <div class="movePost_sizebox_num">4개</div>
        <div class="movePost_sizebox_price">2000원 / 개</div>
      </div>
      <div class="movePost_sizebox movePost_sizebox_unclicked">
        <div class="movePost_sizebox_type">중형</div>
        <div class="movePost_sizebox_num">4개</div>
        <div class="movePost_sizebox_price">2000원 / 개</div>
      </div>
    </div>
    <ProgressMenu></ProgressMenu>
    <div class="movePost_button_container">
      <button class="movePost_button">옮길게요</button>
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
.movePost_container {
  /* width: 420px; */
  width: 100vw;
  /* height: 211vw; */
  position: absolute;
  top: 20px;
}
.movePost_location_container {
  margin: 8vw 0vw 8vw 8vw;
  width: 47vw;
  height: 11vw;
}
.movePost_location {
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.movePost_location_sub {
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-10) /
    var(--unnamed-line-spacing-13) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf);
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
.movePost_sizebox_container {
  display: flex;
  align-items: center;
  height: 55vw;
  width: 85vw;
  margin: 0vw 8vw 8vw;
  justify-content: space-between;
}
.movePost_sizebox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5.5vw 4vw;
  margin: 14vw 0vw;
  /* Layout Properties */
  width: 33vw;
  height: 24vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 2.5vw;
  box-shadow: 0vw 0.8vw 3vw #00000029;
  opacity: 1;
}
.movePost_sizebox_clicked {
  font-size: 16px;
  /* Layout Properties */
  width: 47vw;
  height: 43vw;
  margin: 0vw 2vw;
  /* UI Properties */
  border: 2px solid #6fbb69;
}
.movePost_sizebox_unclicked {
  font-size: 10px;
}
.movePost_sizebox_type {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-32) / var(--unnamed-line-spacing-43) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 2em Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.movePost_sizebox_num {
  margin: 0.9em;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-28) / var(--unnamed-line-spacing-37) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 1.5em Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.movePost_sizebox_price {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/39px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0); */
  text-align: left;
  font: normal normal bold 1.5em Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.movePost_button {
  border: none;
  display: block;
  margin: 30vw auto 5vw;
  /* Layout Properties */
  width: 88vw;
  height: 12vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0vw 0.8vw 1.5vw #00000029;
  border-radius: 2vw;

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
