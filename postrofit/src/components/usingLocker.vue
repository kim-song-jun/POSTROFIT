<template>
  <div class="usingLocker_container">
    <div class="usingLocker_about">
      <div class="usingLocker_line_container userPage_text3">2</div>
      <div class="usingLocker_textbox2">
        <div class="userPage_text2">서울특별시 동작구 남부순환로 지하2089</div>
        <div class="userPage_text3">2호선 사당A</div>
      </div>
      <div class="usingLocker_arrow">
        <div class="userPage_arrow_top"></div>
        <div class="userPage_arrow_bottom"></div>
      </div>
    </div>
    <div class="userPage_text">
      요금:
      <span class="userPage_point_text">2000원</span> / 4시간
    </div>
    <div class="usingLocker_empty"></div>
    <div class="userPage_text">
      사이즈:
      <span class="userPage_point_text">중형</span>
    </div>
    <div class="usingLocker_empty2"></div>
    <div class="userPage_text4">보관 기간</div>
    <div class="userPage_text3 usingLocker_time">
      2022/10/16 <span class="userPage_point_text">12:12:13</span> ~
    </div>
    <div class="userPage_text4 usingLocker_term">현재까지</div>
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
.usingLocker_line_container {
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
.usingLocker_textbox2 {
  margin-left: 10.5vw;
}
.usingLocker_arrow {
  position: absolute;
  left: 76vw;
  top: 10vw;
  height: 2.5vw;
  width: 1.5vw;
  transform: rotate(180deg);
}
.usingLocker_time {
  margin: 0vw auto;
  width: 54vw;
}
</style>
