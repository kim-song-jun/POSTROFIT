<template>
  <div class="mainPage_container">
    <TopMenu></TopMenu>
    <div class="mainPage_bottom_menu_container">
      <MenuBar></MenuBar>
      <div class="mainPage_bottom_menu_content">
        <div class="mainPage_bottom_menu_column">
          <div class="mainPage_bottom_source">사당</div>
          <img
            class="arrow"
            src="../assets/images/arrow.png"
            alt=""
            width="25"
            height="20"
          />
          <div class="mainPage_bottom_destination">강남</div>
        </div>
        <div class="mainPage_bottom_menu_column">
          <div class="mainPage_post_container">
            <div class="mainPage_post_content1">
              <img
                src="../assets/images/dice1.png"
                alt=""
                width="35"
                height="35"
              />
              맡길게요
            </div>
            <div class="mainPage_post_content2">
              <p>중형 5개</p>
              <p>소형 10개</p>
            </div>
          </div>
          <div class="mainPage_post_bar"></div>
          <div class="mainPage_post_container">
            <div class="mainPage_post_content1">
              <img
                src="../assets/images/dice1.png"
                alt=""
                width="35"
                height="35"
              />
              옮길게요
            </div>
            <div class="mainPage_post_content2">
              <p>중형 5개</p>
              <p>소형 10개</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
// import StationSelect from "../components/stationSelect.vue";
import MenuBar from "../components/MenuBar.vue";

export default {
  components: {
    TopMenu,
    // StationSelect,
    MenuBar,
  },
};
</script>

<style>
.mainPage_bottom_menu_container {
  position: fixed;
  /* bottom: 0; */
  /* position: absolute; */
  /* width: 200px; */
  /* height: 100px; */
  /* Layout Properties */
  /* top: 231px; */
  bottom: 0px;
  left: 0px;
  /* margin: 0 auto; */
  width: 420px;
  height: 200px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #fff 0% 0% no-repeat padding-box;
  opacity: 1;
}
.mainPage_bottom_menu_content {
  display: flex;
  flex-direction: column;
}
.mainPage_bottom_menu_column {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
}
.mainPage_bottom_source,
.mainPage_bottom_destination {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* Layout Properties */
  /* top: 61px; */
  /* left: 79px; */
  width: 116px;
  height: 31px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-ffffff);
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #ffffff;
  border-radius: 20px;
  opacity: 1;

  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    17px/23px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fafafa);
  text-align: left;
  font: normal normal bold 17px/23px Roboto;
  letter-spacing: 0px;
  color: #fafafa;
  opacity: 1;
}
.mainPage_post_container {
  display: flex;
}
.mainPage_post_content1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 22px 0px 0px;
  /* Layout Properties */
  /* top: 885px; */
  /* left: 25px; */
  width: 40px;
  height: 13px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 10px/13px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.mainPage_post_content2 {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.mainPage_post_content2 p {
  margin-top: 0;
  /* Layout Properties */
  /* top: 859px; */
  /* left: 82px; */
  /* width: 61px; */
  height: 21px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    16px/21px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.mainPage_post_bar {
  margin: 0 10px;
  /* Layout Properties */
  width: 3px;
  height: 70px;
  /* UI Properties */
  background: var(--unnamed-color-cfcfcf) 0% 0% no-repeat padding-box;
  background: #888 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
}
</style>
