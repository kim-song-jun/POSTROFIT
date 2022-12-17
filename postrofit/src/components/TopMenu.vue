<template>
  <div class="topMenu_container">
    <div class="topMenu_content">
      <img class="topMenu_user_circle" src="../assets/images/user.png" alt="" />
      <div class="topMenu_bar"></div>
      <div class="topMenu_stations">
        <p class="topMenu_source">사당역</p>
        <img class="topMenu_arrow" src="../assets/images/arrow.png" alt="" />
        <p class="topMenu_destination">강남역</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.topMenu_container {
  position: fixed;
  width: 200px;
  height: 100px;
  /* Layout Properties */
  top: 44px;
  left: 13px;
  /* margin: 0 auto; */
  width: 395px;
  height: 69px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0303034d;
  border-radius: 9px;
  opacity: 1;
}
.topMenu_content {
  width: 365px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: absolute;
  /* Layout Properties */
  top: 15px;
  left: 15px;
}
.topMenu_user_circle {
  width: 40px;
  height: 40px;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 26px;
  opacity: 1;
}
.topMenu_stations {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.topMenu_bar {
  border-right: 1.5px darkgray solid;
  height: 34px;
  margin: 0 10px;
}
.topMenu_source,
.topMenu_destination {
  margin: 0;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
