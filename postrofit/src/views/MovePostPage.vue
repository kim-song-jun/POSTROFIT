<template>
  <div class="movePost_container">
    <MenuBar></MenuBar>
    <div class="movePost_sizebox_container">
      <div
        class="movePost_sizebox movePost_sizebox_clicked movePost_sizebox_content"
      >
        <div class="movePost_sizebox_type">소형</div>
        <div class="movePost_sizebox_num">4개</div>
        <div class="movePost_sizebox_price">2000원 / 개</div>
      </div>
      <div
        class="movePost_sizebox movePost_sizebox_unclicked movePost_sizebox_content"
      >
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
  width: 420px;
}
.movePost_sizebox_container {
  display: flex;
}
.movePost_sizebox {
  margin: 110px 0px 0px 13px;
  /* Layout Properties */
  top: 181px;
  left: 250px;
  width: 150px;
  height: 168px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 10px;
  opacity: 1;
}
.movePost_sizebox_clicked {
  font-size: 16px;
  margin: 70px 0px 0px 22px;
  /* Layout Properties */
  top: 140px;
  left: 22px;
  width: 215px;
  height: 249px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-6fbb69);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border: 2px solid #6fbb69;
  border-radius: 10px;
  opacity: 1;
}
.movePost_sizebox_unclicked {
  font-size: 10px;
}
.movePost_sizebox_content {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.movePost_sizebox_type {
  margin-top: 1.2em;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-32) / var(--unnamed-line-spacing-43) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 2em Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.movePost_sizebox_num {
  margin-top: 0.9em;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-28) / var(--unnamed-line-spacing-37) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 1.75em Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.movePost_sizebox_price {
  margin-top: 0.9em;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/39px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 2em Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.movePost_button {
  border: none;
  display: block;
  margin: 65px auto 20px;
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
