<template>
  <div class="lockerInfo_container">
    <div class="lockerInfo_locker_container">
      <div class="lockerInfoHistory_locker"></div>
    </div>
    <div class="lockerInfo_state">
      <div class="lockerInfo_state_row">
        <div class="lockerInfo_state_color lockerInfo_state_using"></div>
        <div class="lockerInfo_state_desc">사용중</div>
      </div>
      <div class="lockerInfo_state_row">
        <div class="lockerInfo_state_color lockerInfo_state_repair"></div>
        <div class="lockerInfo_state_desc">점검중</div>
      </div>
      <div class="lockerInfo_state_row">
        <div class="lockerInfo_state_color lockerInfo_state_controller"></div>
        <div class="lockerInfo_state_desc">제어부</div>
      </div>
      <div class="lockerInfo_state_row">
        <div class="lockerInfo_state_color lockerInfo_state_mine"></div>
        <div class="lockerInfo_state_desc">내 보관함</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.lockerInfo_container {
  padding: 4.5vw 0vw 6vw 11vw;
}
.lockerInfo_locker_container {
  overflow: scroll;
  /* 파이어폭스 */
  /* scrollbar-width: none; */
}
/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
/* .lockerInfo_locker_container::-webkit-scrollbar {
  display: none;
} */
.lockerInfoHistory_locker {
  height: 85.5vw;
  width: 125vw;
  background: gray;
}
.lockerInfo_state {
  margin-top: 10.5vw;
  margin-left: 1.5vw;
  display: flex;
}
.lockerInfo_state_row {
  display: flex;
  margin: 0vw 0vw 2.5vw;
}
.lockerInfo_state_color {
  margin-right: 1.2vw;
  /* Layout Properties */
  width: 7.2vw;
  height: 4.5vw;
  /* UI Properties */
  /* background: 0% 0% no-repeat padding-box; */
  border-radius: 1.2vw;
  opacity: 1;
}
.lockerInfo_state_using {
  background: #e4e4e4 0% 0% no-repeat padding-box;
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
  margin-right: 1.2vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    12px/16px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 12px/16px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
