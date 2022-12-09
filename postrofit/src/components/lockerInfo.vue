<template>
  <div class="lockerInfo_container">
    <div class="lockerInfo_locker"></div>
    <div class="lockerInfo_state">
      <div class="lockerInfo_state_column">
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_using"></div>
          <div class="lockerInfo_state_desc">사용중</div>
        </div>
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_repair"></div>
          <div class="lockerInfo_state_desc">점검중</div>
        </div>
      </div>
      <div class="lockerInfo_state_column">
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_empty"></div>
          <div class="lockerInfo_state_desc">선택가능</div>
        </div>
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_controller"></div>
          <div class="lockerInfo_state_desc">제어부</div>
        </div>
      </div>
      <div class="lockerInfo_state_column">
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_chosen"></div>
          <div class="lockerInfo_state_desc">선택</div>
        </div>
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_mine"></div>
          <div class="lockerInfo_state_desc">내 보관함</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.lockerInfo_container {
  padding: 18px 0px 24px 43px;
}
.lockerInfo_locker {
  margin-bottom: 42px;
  height: 342px;
  width: 500px;
  background: gray;
}
.lockerInfo_state {
  margin-left: 6px;
  display: flex;
}
.lockerInfo_state_column {
  display: flex;
  flex-direction: column;
}
.lockerInfo_state_row {
  display: flex;
  margin: 0px 0px 10px;
}
.lockerInfo_state_color {
  margin: 0px 5px 0px 0px;
  /* Layout Properties */
  /* top: 549px; */
  /* left: 49px; */
  width: 29px;
  height: 18px;
  /* UI Properties */
  /* background: 0% 0% no-repeat padding-box; */
  border-radius: 5px;
  opacity: 1;
}
.lockerInfo_state_using {
  background: #e4e4e4 0% 0% no-repeat padding-box;
}
.lockerInfo_state_empty {
  background: #5e62d1 0% 0% no-repeat padding-box;
}
.lockerInfo_state_chosen {
  background: #d04040 0% 0% no-repeat padding-box;
}
.lockerInfo_state_repair {
  background: #707070 0% 0% no-repeat padding-box;
}
.lockerInfo_state_controller {
  background: #6fbb69 0% 0% no-repeat padding-box;
}
.lockerInfo_state_mine {
  background: #ffc702 0% 0% no-repeat padding-box;
}
.lockerInfo_state_desc {
  margin: 0px 5px 0px 0px;
  /* Layout Properties */
  /* top: 550px; */
  /* left: 83px; */
  /* width: 36px; */
  /* height: 16px; */
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    12px/16px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 12px/16px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
