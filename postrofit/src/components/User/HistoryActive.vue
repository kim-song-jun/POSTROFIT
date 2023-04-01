<template>
  <div class="historyActive_container">
    <cancelModal
      v-if="cancelModalOpen"
      :startStation="historyDetail.startStation"
      :endStation="historyDetail.endStation"
      @closeCancelModal="cancelModalOpen = false"
    />
    <div class="historyActive_info_container">
      <div class="historyActive_info userHome_text1">
        이용내역
        <div class="userHome_text2">현재 이용하고 있는 정보</div>
      </div>
      <div class="historyActive_cancel_container">
        <span class="historyActive_cancel" @click="cancelModalOpen = true"
          >취소하기</span
        >
      </div>
    </div>
    <div class="locationBox_container">
      <div class="locationBoxActive_src locationBox_clicked">
        <div class="locationBoxActive_text1">출발</div>
        <div class="locationBox_text2">
          2호선 <span>{{ historyDetail.startStation }}</span>
        </div>
        <div class="locationBoxActive_text3">
          서울특별시 동작구 남부순환로 지하2089
        </div>
      </div>
      <div class="locationBox_arrow_container">
        <img class="locationBox_arrow" src="@/assets/images/arrow.png" alt="" />
      </div>
      <div class="locationBoxActive_dst">
        <div class="locationBoxActive_text1">도착</div>
        <div class="locationBox_text2">
          2호선 <span>{{ historyDetail.endStation }}</span>
        </div>
        <div class="locationBoxActive_text3">
          서울특별시 동작구 남부순환로 지하2089
        </div>
      </div>
    </div>
    <progressMenu />
    <noticeBox class="historyLocker_noticeBox"></noticeBox>
    <div class="movePost_button_container">
      <button class="movePost_button" @click="$emit('openLockerModal')">
        보관함 열기
      </button>
    </div>
  </div>
</template>

<script>
import progressMenu from '../progressMenu.vue';
import noticeBox from '../noticeBox.vue';
import cancelModal from '../cancelModal.vue';

export default {
  data() {
    return {
      cancelModalOpen: false,
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
    progressMenu,
    noticeBox,
    cancelModal,
  },
};
</script>

<style>
.historyActive_container {
  overflow: scroll;
  height: 92.2vh;
  /* 파이어폭스 */
  scrollbar-width: none;
}
/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
.historyActive_container::-webkit-scrollbar {
  display: none;
}
.historyActive_info_container {
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
.historyActive_info {
  margin-left: 10.5vw;
}
.historyActive_cancel {
  margin-left: 36vw;
  /* UI Properties */
  /* text-decoration: var(--unnamed-decoration-underline);
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-14) / var(--unnamed-line-spacing-19)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  font: normal normal bold 14px/19px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-decoration-line: underline;
}
.movePost_button {
  border: none;
  display: block;
  margin: 15vw auto 5vw;
  /* Layout Properties */
  width: 83vw;
  height: 12vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 2vw;

  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: center;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
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
.locationBox_container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vw;
}
.locationBoxActive_src,
.locationBoxActive_dst {
  text-align: center;
  /* Layout Properties */
  width: 34vw;
  height: 41vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-6fbb69); */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 5vw;
  opacity: 1;
}
.locationBox_clicked {
  border: 1px solid #6fbb69;
}
.locationBox_arrow {
  width: 5vw;
  height: 3vw;
  margin: 0vw 6vw;
}
.locationBoxActive_text1 {
  margin-top: 3.5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-32) / var(--unnamed-line-spacing-43)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  font: normal normal bold 32px/43px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.locationBox_text2 {
  margin: 2.5vw 0vw 1vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-26) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.locationBoxActive_text3 {
  width: 23vw;
  margin: 0vw auto;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-10) /
    var(--unnamed-line-spacing-13) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
</style>
