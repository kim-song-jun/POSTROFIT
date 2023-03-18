<template>
  <div class="userPage_container">
    <div class="userPage_top">
      <div class="userPage_arrow" @click="$router.go(-1)">
        <div class="userPage_arrow_top"></div>
        <div class="userPage_arrow_bottom"></div>
      </div>
      <div class="userPage_top_text">내 정보</div>
      <!-- <div
        style="
          font: normal normal 14px/19px Roboto;
          position: absolute;
          right: 5vw;
        "
      >
        내 보관함
      </div> -->
    </div>
    <router-view @openLockerModal="lockerModalOpen = true"></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      nickname: '김성준',
    };
  },
};
</script>

<style>
.userPage_container {
  width: 100vw;
  height: 100vh;
}
.userPage_top {
  width: 100%;
  height: 7.8vh;
  display: flex;
  align-items: center;
}
.userPage_arrow {
  position: absolute;
  /* height: 8vw; */
  /* width: 8vw; */
  left: 7vw;
  top: 8vw;
}
.userPage_arrow .userPage_arrow_top,
.userPage_arrow .userPage_arrow_bottom {
  background-color: #666;
  height: 2.5px;
  width: 17px;
  position: absolute;
}
.userPage_arrow_top {
  transform: rotate(-45deg);
  transform-origin: bottom left;
}
.userPage_arrow_bottom {
  transform: rotate(45deg);
  transform-origin: top left;
}
.userPage_top_text {
  width: 100%;
  text-align: center;
  /* UI Properties */
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
