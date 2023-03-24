<template>
  <div class="historyActive_container">
    <cancelModal
      v-if="cancelModalOpen"
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
    <locationBoxActive></locationBoxActive>
    <progressMenu></progressMenu>
    <noticeBox class="historyLocker_noticeBox"></noticeBox>
    <div class="movePost_button_container">
      <button class="movePost_button" @click="$emit('openLockerModal')">
        보관함 열기
      </button>
    </div>
  </div>
</template>

<script>
import locationBoxActive from '../locationBoxActive.vue';
import progressMenu from '../progressMenu.vue';
import noticeBox from '../noticeBox.vue';
import cancelModal from '../cancelModal.vue';

export default {
  components: {
    locationBoxActive,
    progressMenu,
    noticeBox,
    cancelModal,
  },
  data() {
    return {
      cancelModalOpen: false,
    };
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
  width: 88vw;
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
</style>
