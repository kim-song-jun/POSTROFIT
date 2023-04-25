<template>
  <div class="historyLocker_container">
    <div class="historyActive_info_container">
      <div class="historyActive_info userHome_text1">
        내 보관함
        <div class="userHome_text2">현재 이용하는 보관함 정보</div>
      </div>
    </div>
    <div class="historyLocker_station">
      <div class="historyLocker_line">2</div>
      <div class="historyLocker_station_name">
        <div class="historyLocker_station_location">
          {{ userStore.location }}
        </div>
        2호선 {{ userStore.station }}
      </div>
    </div>
    <lockerInfo />
    <div class="historyLocker_detail_container">
      <div class="userHome_text">
        요금:
        <span class="userHome_point_text">{{ userStore.fee }}원</span> / 4시간
      </div>
      <div class="usingLocker_empty"></div>
      <div class="userHome_text">
        사이즈:
        <span class="userHome_point_text">{{ userStore.size }}</span>
      </div>
      <div class="usingLocker_empty2"></div>
      <div class="userHome_text4">보관 기간</div>
      <div class="userHome_text3 usingLocker_time">
        {{ userStore.date }}
        <span class="userHome_point_text">{{ userStore.time }}</span> ~
      </div>
      <div class="userHome_text4 usingLocker_term">현재까지</div>
    </div>
    <noticeBox class="historyLocker_noticeBox" />
    <div class="movePost_button_container">
      <button class="movePost_button" @click="$emit('openLockerModal')">
        보관함 열기
      </button>
    </div>
  </div>
</template>

<script>
import lockerInfo from '../lockerInfo.vue';
import noticeBox from '../noticeBox.vue';

export default {
  computed: {
    userStore() {
      return this.$store.state.userStore;
    },
  },
  methods: {
    makeLockerByData(locker) {
      // 한 줄에 5개의 보관함이 있다고 가정
      let newLocker = [];
      let row = [];
      if (Array.isArray(locker))
        locker.forEach((el, i) => {
          row.push(el);
          if ((i + 1) % 5 == 0 || i + 1 == locker.length) {
            newLocker.push(row);
            if (
              row.find((e) => e.storageSize == 'MID') ||
              row.find((e) => e.storageSize == 'BIG')
            )
              newLocker.push([]);
            row = [];
          }
        });
      return newLocker;
    },
    setUserStore() {
      // 보관함 데이터 서버 요청
      const storageId = this.$store.state.userStore.storageId;
      this.$axios.get(`/user/store/storage/${storageId}`).then((response) => {
        this.$store.commit('setUserStore', {
          ...this.$store.state.userStore,
          storageStatDTO: response.data.storageStatDTO,
          storagePasswordDTO: response.data.storagePasswordDTO,
        });
        console.log(this.makeLockerByData(response.data.storageStatDTOS));
        this.$store.commit('setStorage', {
          locker: this.makeLockerByData(response.data.storageStatDTOS),
        });
      });
    },
  },
  mounted() {
    this.setUserStore();
  },
  components: {
    lockerInfo,
    noticeBox,
  },
};
</script>

<style>
.historyLocker_container {
  overflow: scroll;
  height: 92.2vh;
  /* 파이어폭스 */
  scrollbar-width: none;
}
/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
.historyLocker_container::-webkit-scrollbar {
  display: none;
}
.userHome_text {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal normal 18px/24px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_text1 {
  /* UI Properties */
  font: normal normal bold 20px/26px Roboto;
  text-align: left;
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
.userHome_text3 {
  /* UI Properties */
  font: normal normal normal 20px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_text4 {
  /* UI Properties */
  font: normal normal normal 16px/21px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.userHome_point_text {
  color: #6fbb69;
}
.usingLocker_empty {
  height: 1.8vw;
  width: 100%;
}
.usingLocker_empty2 {
  height: 5vw;
  width: 100%;
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
.historyLocker_station {
  margin: 3vh 0vw 0vh 10vw;
  display: flex;
}
.historyLocker_line {
  margin-right: 3.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Layout Properties */
  width: 8.8vw;
  height: 8.8vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  border-radius: 4.5vw;
  opacity: 1;
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-26) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.historyLocker_station_name {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-26) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.historyLocker_station_location {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal normal 10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
.historyLocker_detail_container {
  margin: 0vw auto;
  width: 78vw;
}
.usingLocker_term {
  text-align: right;
}
.usingLocker_time {
  margin: 0vw auto;
  width: 54vw;
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
.historyLocker_noticeBox {
  width: 83vw;
}
</style>
