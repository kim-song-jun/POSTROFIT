<template>
  <div class="userPage_container">
    <lockerModal
      v-if="lockerModalOpen"
      :lockerInfo="lockerInfo"
      @closeLockerModal="lockerModalOpen = false"
    ></lockerModal>
    <div class="userPage_top">
      <div class="userPage_arrow" @click="moveBeforePage">
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
    <router-view @openLockerModal="openLockerModal" />
  </div>
</template>

<script>
import lockerModal from '../../components/lockerModal.vue';

export default {
  data() {
    return {
      lockerModalOpen: false,
      lockerInfo: {},
    };
  },
  methods: {
    openLockerModal() {
      this.lockerModalOpen = true;
      if (this.$store.state.serviceType == '내보관함')
        this.lockerInfo = this.$store.state.userStore.storagePasswordDTO;
      if (this.$store.state.serviceType == '내이용내역')
        this.lockerInfo = {
          stationName: this.$store.state.userHistoryDetail.stationName,
          storageNum: this.$store.state.userHistoryDetail.storageNum,
          password: this.$store.state.userHistoryDetail.password,
        };
    },
    moveBeforePage() {
      if (this.$store.state.userID == Infinity) this.$router.push('/LoginPage');
      this.$router.go(-1);
    },
  },
  created() {
    if (this.$store.state.userID == Infinity) this.$router.push('/LoginPage');
  },
  components: {
    lockerModal,
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
