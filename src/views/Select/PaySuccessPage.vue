<template>
  <div class="paySuccessPage_container">
    <lockerModal
      v-if="lockerModalOpen"
      :lockerInfo="lockerInfo"
      @closeLockerModal="move2Main"
    />
    <div class="paySuccessPage_content">
      <img src="../../assets/images/dice1.png" alt="" width="76" height="76" />
      <div class="paySuccessPage_message">{{ title }}</div>
      <div class="paySuccessPage_info">{{ size }} {{ time }}</div>
      <div class="progressMenu_container">
        <div class="progressMenu_graybar" />
        <div class="progressMenu_menu">
          <div class="progressMenu_desc">{{ progress[0] }}</div>
          <div class="progressMenu_circle">01</div>
        </div>
        <div class="progressMenu_menu">
          <div class="progressMenu_desc">{{ progress[1] }}</div>
          <div class="progressMenu_circle">02</div>
        </div>
        <div class="progressMenu_menu">
          <div class="progressMenu_desc">{{ progress[2] }}</div>
          <div class="progressMenu_circle">03</div>
        </div>
        <div class="progressMenu_menu">
          <div class="progressMenu_check">04</div>
        </div>
      </div>
      <div class="progressMenu4_desc_container">
        <div class="progressMenu4_now">{{ progress[3] }}</div>
        <div class="progressMenu4_desc_sub">
          장소, 사이즈, 이용금액, 주의사항 확인
        </div>
      </div>
      <noticeBox class="paySuccessPage_noticeBox" />
      <button class="paySuccessPage_button" @click="testOpenLockerModal">
        보관함 열기
      </button>
    </div>
  </div>
</template>

<script>
import noticeBox from '../../components/noticeBox.vue';
import lockerModal from '../../components/lockerModal.vue';

export default {
  data() {
    return {
      lockerModalOpen: false,
      lockerInfo: {
        stationName: '?',
        storageNum: '?',
        password: '?',
      },
      progress: ['출발역 선택', '물품 선택', '보관함 열기', '배송 중'],
    };
  },
  computed: {
    startStation() {
      return this.$store.state.startStation;
    },
    endStation() {
      return this.$store.state.endStation;
    },
    selectStation() {
      return this.$store.state.selectStation;
    },
    serviceType() {
      return this.$store.state.serviceType;
    },
    size() {
      return this.getSize(
        this.serviceType == '맡길게요'
          ? this.$store.state.orderData.size
          : this.serviceType == '옮길게요'
          ? this.$store.state.deliveryData.selectedLocker.storageSize
          : this.$store.state.storeData.size,
      );
    },
    time() {
      return this.serviceType == '보관할게요'
        ? `${this.$store.state.storeData.time}시간`
        : null;
    },
    title() {
      return this.serviceType == '옮길게요' ? '배송 시작' : '결제 완료';
    },
  },
  methods: {
    getSize(size) {
      if (size == 'SMALL') return '소형';
      if (size == 'MID') return '중형';
      if (size == 'BIG') return '대형';
    },
    move2Main() {
      this.lockerModalOpen = false;
      // 하단 메뉴 창 닫기
      // issue.F 자연스럽지 못한 애니메이션
      this.$store.dispatch('initStation');
      this.$store.dispatch('initServiceData');
      this.$router.push('/MainPage');
    },
    testOpenLockerModal() {
      // 보관함 비밀번호 받아오기
      const userId = 0;
      if (this.serviceType == '맡길게요')
        this.$axios
          .get(`/order/storage/info/${userId}`)
          .then((response) => {
            this.lockerInfo = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      if (this.serviceType == '옮길게요')
        this.$axios
          .get(
            `/delivery/take/password/테스트역1/${this.$store.state.deliveryData.selectedLocker.storageNumber}`,
          )
          .then((response) => {
            this.lockerInfo = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      if (this.serviceType == '보관할게요') {
        const query = {params: {storeId: this.$store.state.storeData.storeId}};
        this.$axios
          .get(`/store/id/store`, query)
          .then((response) => {
            this.lockerInfo = {
              stationName: response.data.stationName,
              storageNum: response.data.storageNumber,
              password: response.data.storagePassword,
            };
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.lockerModalOpen = true;
    },
  },
  components: {
    noticeBox,
    lockerModal,
  },
};
</script>

<style>
.paySuccessPage_content {
  padding-top: 10vh;
  height: 82.7vh;
  overflow: scroll;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/39px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: center;
  font: normal normal bold 30px/39px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* 파이어폭스 */
  scrollbar-width: none;
}
/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
.paySuccessPage_content::-webkit-scrollbar {
  display: none;
}
.paySuccessPage_message {
  margin: 3.5vh 0vw 0.2vh;
}
.paySuccessPage_info {
  padding-bottom: 3.4vh;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal normal 16px/21px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69); */
  font: normal normal normal 16px/21px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.paySuccessPage_noticeBox {
  width: 83vw;
}
.paySuccessPage_button {
  border: none;
  margin-bottom: 1.9vh;
  /* Layout Properties */
  width: 83vw;
  height: 5.5vh;
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
.progressMenu_container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.7vh 12.5vw 0.9vh;
}
.progressMenu_graybar {
  position: absolute;
  top: 26.5vw;
  left: 8.5vw;
  z-index: -1;
  /* Layout Properties */
  width: 83vw;
  height: 2vw;
  /* UI Properties */
  /* background: var(--unnamed-color-d8d6d6) 0% 0% no-repeat padding-box; */
  background: #d8d6d6 0% 0% no-repeat padding-box;
  border-radius: 30vw;
  opacity: 1;
}
.progressMenu_menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* UI Properties */
  opacity: 1;
}
.progressMenu_circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5vw;
  margin: 0vw 5.5vw;
  /* Layout Properties */
  width: 9.5vw;
  height: 9.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-707070) 0% 0% no-repeat padding-box; */
  background: #707070 0% 0% no-repeat padding-box;
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: left;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.progressMenu_desc {
  padding: 0vw 0vw 2vw;
  min-width: 60px;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: center;
  font: normal normal bold 12px/19px Roboto;
  letter-spacing: 0px;
  color: #9b9b9b;
  opacity: 1;
}
.progressMenu_check {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6fbb69;
  /* margin-top: 34px; */
  margin: 9vw 3.5vw 0px;
  /* Layout Properties */
  width: 13vw;
  height: 13vw;
  border-radius: 7vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.progressMenu4_desc_container {
  width: 51vw;
  height: 12vw;
  margin-left: 38vw;
}
.progressMenu4_now {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: right;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.progressMenu4_desc_sub {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-10) /
    var(--unnamed-line-spacing-13) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  text-align: right;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
</style>
