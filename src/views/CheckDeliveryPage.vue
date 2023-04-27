<template>
  <div class="checkDeliveryPage_container">
    <checkModal v-if="checkModalOpen" @closeCheckModal="testMove2PayPage" />
    <div class="checkDeliveryPage_content">
      <div class="checkDeliveryPage_info">
        <locationBox
          :startStation="startStation.name"
          :endStation="endStation.name"
        />
        <div class="checkDeliveryPage_text">
          {{ moneyType }}:
          <span class="checkDeliveryPage_point">{{ cost }}원</span>
        </div>
        <div class="checkDeliveryPage_text">
          사이즈:
          <span class="checkDeliveryPage_point">{{ getSize(size) }}</span>
        </div>
      </div>
      <progressMenu />
      <noticeBox class="checkDeliveryPage_noticeBox"></noticeBox>
      <div class="checkDeliveryPage_button_container">
        <button class="checkDeliveryPage_button" @click="checkModalOpen = true">
          {{ serviceType }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import progressMenu from '../components/progressMenu3.vue';
import locationBox from '../components/locationBox.vue';
import noticeBox from '@/components/noticeBox.vue';
import checkModal from '../components/checkModal.vue';

export default {
  data() {
    return {
      checkModalOpen: false,
    };
  },
  computed: {
    serviceType() {
      return this.$store.state.serviceType;
    },
    moneyType() {
      return this.$store.state.serviceType == '맡길게요' ? '요금' : '수익';
    },
    size() {
      return this.$store.state.serviceType == '맡길게요'
        ? this.$store.state.orderData.size
        : this.$store.state.deliveyrData.size;
    },
    cost() {
      return this.$store.state.serviceType == '맡길게요'
        ? this.$store.state.orderData.cost
        : this.$store.state.deliveyrData.cost;
    },
    startStation() {
      return this.$store.state.startStation;
    },
    endStation() {
      return this.$store.state.endStation;
    },
  },
  methods: {
    getSize(storageSize) {
      return storageSize == 'SMALL' ? '소형' : '중형';
    },
    testMove2PayPage() {
      this.checkModalOpen = false;
      // 결제 페이지로 이동
      // 결제 후 등록 요청
      // user_id 0~3, 2는 배달부
      const userId = 0;
      // try. reqData ={}로 변경해보기
      if (this.serviceType == '맡길게요') {
        this.makeOrder(userId);
      }
      if (this.serviceType == '옮길게요') {
        this.takeDelivery(userId);
      }
    },
    move2PayPage() {
      // 결제 페이지로 이동
    },
    makeOrder(userId) {
      const storageId = this.$store.state.orderData.selectedLocker.storageId;
      const endStationName = '테스트역2';
      this.$axios
        .post('/order/make', {
          userId: userId,
          storageId: storageId,
          endStationName: endStationName,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200)
            this.$router.push('/SelectPage/paySuccessPage');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    takeDelivery(userId) {
      // order_id는 어디서 받아오나? 0,1
      const orderId = this.$store.state.deliveryData.orderId;

      this.$axios
        .post('/delivery/take', {
          userId: 2,
          orderId: orderId,
        })
        .then((response) => {
          if (response.status == 200)
            this.$router.push('/SelectPage/paySuccessPage');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    testSetDeliveryData() {
      if (this.$store.serviceType == '옮길게요')
        this.$axios
          .get(
            `/delivery/order/storage/${this.$store.state.deliveryData.selectedLocker.storageId}`,
          )
          .then((response) => {
            this.$store.commit('setDeliveryData', {
              ...this.$store.state.deliveryData,
              size: response.data.size,
              cost: response.data.price,
              orderId: response.data.orderId,
              storageNum: response.data.storageNum,
            });
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  mounted() {
    this.testSetDeliveryData();
  },
  components: {
    progressMenu,
    locationBox,
    noticeBox,
    checkModal,
  },
};
</script>

<style>
.checkDeliveryPage_content {
  height: 92.7vh;
  overflow: scroll;
  scrollbar-width: none;
}
.checkDeliveryPage_content::-webkit-scrollbar {
  display: none;
}
.checkDeliveryPage_info {
  width: 82.5vw;
  margin: 5.3vh auto 7vh;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.checkDeliveryPage_text {
  margin-left: 7vw;
  margin-bottom: 1.2vh;
}
.checkDeliveryPage_point {
  color: #6fbb69;
}
.checkDeliveryPage_noticeBox {
  width: 83vw;
}
.checkDeliveryPage_button {
  border: none;
  display: block;
  margin: 0vh auto 3vh;
  /* Layout Properties */
  width: 83vw;
  height: 5.5vh;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 2vw;
  opacity: 1;
  /* UI Properties */
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
</style>
