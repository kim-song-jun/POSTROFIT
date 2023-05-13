<template>
  <div class="checkBill_container">
    <checkModal v-if="checkModalOpen" @closeCheckModal="testMove2PayPage" />
    <div class="checkBill_content">
      <div class="checkBill_location_container">
        <div class="checkBill_location">{{ selectStation.name }}</div>
        <div class="checkBill_location_sub">
          서울특별시 동작구 남부순환로 지하2089
        </div>
      </div>
      <div class="checkBill_info">
        <div class="checkBill_price">
          기본 요금:
          <span class="checkBill_green">{{ storeData.profit }}원</span> /
          {{ storeData.time }}시간
        </div>
        <div class="checkBill_size">
          사이즈:
          <span class="checkBill_green">{{
            getSize(storeData.selectedLocker.storageSize)
          }}</span>
        </div>
        <div class="checkBill_term">보관 기간</div>
        <div class="checkBill_date">
          2022/10/16
          <span class="checkBill_green">12:12</span> ~
        </div>
      </div>
      <progressMenu />
      <noticeBox class="checkBill_noticeBox"></noticeBox>
      <div class="checkBill_button_container">
        <button class="checkBill_button" @click="openCheckModal">
          보관할게요
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import progressMenu from '../../components/progressMenu.vue';
import noticeBox from '../../components/noticeBox.vue';
import checkModal from '../../components/Select/checkModal.vue';

export default {
  data() {
    return {
      checkModalOpen: false,
    };
  },
  computed: {
    selectStation() {
      return this.$store.state.selectStation;
    },
    storeData() {
      return this.$store.state.storeData;
    },
  },
  methods: {
    openCheckModal() {
      this.checkModalOpen = true;
    },
    testMove2PayPage() {
      // 결제 페이지로 이동
      // 결제 완료 페이지로 이동
      this.checkModalOpen = false;
      // 결제 후 등록 요청
      const reqData = {
        userId: this.$store.state.userID,
        storageId: this.$store.state.storeData.selectedLocker.storageId,
      };
      this.$axios
        .post('/store/', reqData)
        .then((response) => {
          this.$store.commit('setStoreData', {
            ...this.$store.state.storeData,
            ...response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push('/SelectPage/paySuccessPage');
    },
    move2PayPage() {
      // 결제 페이지로 이동
    },
    testGetFee() {
      // this.feeData = {storageSize: 'SMALL', profit: 2000, time: 4};
      this.$axios
        .get(
          `/store/fee/테스트역1/${this.$store.state.storeData.selectedLocker.storageSize}`,
        )
        .then((response) => {
          this.$store.commit('setStoreData', {
            ...this.$store.state.storeData,
            profit: response.data.profit,
            time: response.data.time,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSize(size) {
      if (size == 'SMALL') return '소형';
      if (size == 'MID') return '중형';
      if (size == 'BIG') return '대형';
    },
  },
  mounted() {
    this.testGetFee();
  },
  components: {
    progressMenu,
    noticeBox,
    checkModal,
  },
};
</script>

<style>
.checkBill_content {
  overflow: scroll;
  height: 92.7vh;
  scrollbar-width: none;
}
.checkBill_content::-webkit-scrollbar {
  display: none;
}
.checkBill_location_container {
  margin: 3.8vh 0vw 3.8vh 8vw;
  width: 47vw;
  height: 5.5vh;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) */
  /* var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) */
  /* var(--unnamed-font-family-roboto); */
  /* letter-spacing: var(--unnamed-character-spacing-0); */
  /* color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.checkBill_info {
  margin: 7.2vh 0vw 0vh 10.5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.checkBill_green {
  color: #6fbb69;
}
.checkBill_price {
  margin-bottom: 1.2vh;
}
.checkBill_size {
  margin-bottom: 2.3vh;
}
.checkBill_location_sub {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-10) /
    var(--unnamed-line-spacing-13) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-cfcfcf); */
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #cfcfcf;
  opacity: 1;
}
.checkBill_noticeBox {
  width: 83vw;
}
.checkBill_button {
  border: none;
  display: block;
  margin: 15vh auto 3vh;
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
.checkBill_button:disabled {
  opacity: 0.5;
}
</style>
