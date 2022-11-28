<template>
  <div class="menuBar_container">
    <div class="menuBar_bottom_menu_bar">
      <div class="menuBar_subway_line">2</div>
      <div v-if="0" class="menuBar_subway_line">4</div>
      <div class="menuBar_round_bar"></div>
      <div class="menuBar_close_btn">X</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.menuBar_container {
  position: relative;
}
.menuBar_bottom_menu_bar {
  display: flex;
  height: 40px;
  align-items: center;
  border-top: 2px solid #888888;
  border-bottom: 1.5px solid #ccc;
}
.menuBar_subway_line {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 14px;
  margin: 0px 10px;
  /* Layout Properties */
  width: 27px;
  height: 27px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  background: #6fbb69 0% 0% no-repeat padding-box;
  opacity: 1;
}
.menuBar_round_bar {
  position: absolute;
  margin-bottom: 17px;
  /* Layout Properties */
  /* top: 10px; */
  left: 170px;
  width: 80px;
  height: 3px;
  /* UI Properties */
  background: var(--unnamed-color-cfcfcf) 0% 0% no-repeat padding-box;
  background: #cfcfcf 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
}
.menuBar_close_btn {
  position: absolute;
  /* Layout Properties */
  /* top: 5px; */
  right: 10px;
  width: 10px;
  height: 26px;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal 100 var(--unnamed-font-size-20) / 26px Roboto; */
  /* letter-spacing: var(--unnamed-character-spacing-0); */
  /* color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal 100 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
