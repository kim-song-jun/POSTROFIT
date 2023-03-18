<template>
  <div class="usingLocker_container" @click="$router.push('/UserPage/locker')">
    <div class="usingLocker_about">
      <div class="usingLocker_line_circle usingLocker_line_text">2</div>
      <div class="usingLocker_textbox2">
        <div class="userHome_text2">서울특별시 동작구 남부순환로 지하2089</div>
        <div class="userHome_text3">2호선 사당A</div>
      </div>
      <div class="usingLocker_arrow">
        <div class="usingLocker_arrow_top"></div>
        <div class="usingLocker_arrow_bottom"></div>
      </div>
    </div>
    <div class="userHome_text">
      요금:
      <span class="userHome_point_text">2000원</span> / 4시간
    </div>
    <div class="usingLocker_empty"></div>
    <div class="userHome_text">
      사이즈:
      <span class="userHome_point_text">중형</span>
    </div>
    <div class="usingLocker_empty2"></div>
    <div class="userHome_text4">보관 기간</div>
    <div class="userHome_text3 usingLocker_time">
      2022/10/16
      <span class="userHome_point_text">12:12:13</span> ~
    </div>
    <div class="userHome_text4 usingLocker_term">현재까지</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.usingLocker_empty {
  height: 1.8vw;
  width: 100%;
}
.usingLocker_empty2 {
  height: 5vw;
  width: 100%;
}
.usingLocker_container {
  margin-top: 1.3vw;
  padding: 5vw;
  position: relative;
  /* Layout Properties */
  width: 73vw;
  height: 51vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 20px;
  opacity: 1;
}
.usingLocker_about {
  margin-bottom: 4.5vw;
}
.usingLocker_line_circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* Layout Properties */
  top: 5.5vw;
  left: 4vw;
  width: 9vw;
  height: 9vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  border-radius: 5vw;
}
.usingLocker_line_text {
  /* UI Properties */
  font: normal normal normal 20px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #fff;
  opacity: 1;
}
.usingLocker_textbox2 {
  margin-left: 10.5vw;
}
.usingLocker_time {
  margin: 0vw auto;
  width: 54vw;
}
.usingLocker_arrow {
  position: absolute;
  right: 0vw;
  top: 26vw;
}
.usingLocker_arrow .usingLocker_arrow_top,
.usingLocker_arrow .usingLocker_arrow_bottom {
  background-color: #666;
  height: 1.5px;
  width: 15px;
}
.usingLocker_arrow_top {
  transform: rotate(-135deg);
  transform-origin: bottom left;
}
.usingLocker_arrow_bottom {
  transform: rotate(135deg);
  transform-origin: top left;
}
</style>
