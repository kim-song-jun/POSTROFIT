<template>
  <div class="historyEnd_container">
    <div class="historyEnd_info_container">
      <div class="historyEnd_info userHome_text1">
        이용내역
        <div class="userHome_text2">현재 이용하고 있는 정보</div>
      </div>
    </div>
    <locationBox
      class="historyEnd_locationBox"
      :startStation="historyDetail.startStation"
      :endStation="historyDetail.endStation"
    />
    <noticeBox class="historyLocker_noticeBox"></noticeBox>
  </div>
</template>

<script>
import locationBox from '../locationBox.vue';
import noticeBox from '../noticeBox.vue';

export default {
  data() {
    return {
      historyDetail: {},
    };
  },
  methods: {
    getHistoryDetail() {
      // 출발역, 도착역 또는 보관역 정보 서버에 요청
      const data = {
        startStation: '사당',
        endStation: '강남',
        selectStation: '사당',
      };
      return data;
    },
  },
  created() {
    this.historyDetail = this.getHistoryDetail();
  },
  components: {
    locationBox,
    noticeBox,
  },
};
</script>

<style>
.historyEnd_container {
  overflow: scroll;
  height: 92.2vh;
}
.historyEnd_info_container {
  display: flex;
  align-items: center;
  position: relative;
  /* Layout Properties */
  width: 100vw;
  height: 20vw;
  /* UI Properties */
  /* background: var(--unnamed-color-fbfbfb) 0% 0% no-repeat padding-box; */
  background: #fbfbfb 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.historyEnd_info {
  margin-left: 10.5vw;
}
.historyEnd_locationBox {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9vw;
  margin-bottom: 5vw;
}
.historyEnd_locationBox .locationBox_text3 {
  margin: 0vw auto;
}
.userHome_text1 {
  /* UI Properties */
  font: normal normal bold 20px/26px Roboto;
  /* text-align: left; */
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_text2 {
  /* UI Properties */
  font: normal normal normal 10px/13px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
