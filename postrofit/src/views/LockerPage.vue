<template>
  <div class="lockerPage_container">
    <div class="lockerPage_content">
      <div class="lockerPage_station">
        <div class="lockerPage_station_name">{{ getStationName() }}</div>
        <div class="lockerPage_station_location">
          서울특별시 동작구 남부순환로 지하2089
        </div>
      </div>
      <lockerInfo v-if="storage" />
      <noticeBox class="lockerPage_noticeBox" />
      <button class="lockerPage_button" @click="move2CheckPage">
        {{ $route.query.serviceType }}
      </button>
    </div>
  </div>
</template>

<script>
import lockerInfo from '../components/lockerInfo.vue';
import noticeBox from '../components/noticeBox.vue';
import lockerData from '../assets/data/lockerInfo.json';

export default {
  data() {
    return {};
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
    storage() {
      return this.$store.state.storage;
    },
  },
  methods: {
    getStationName() {
      return this.$route.query.serviceType == '맡길게요'
        ? this.startStation.name
        : this.$route.query.serviceType == '옮길게요'
        ? this.endStation.name
        : this.selectStation.name;
    },
    getPathByServiceType() {
      return this.$route.query.serviceType == '보관할게요'
        ? '/SelectPage/checkBillPage'
        : '/SelectPage/checkDeliveryPage';
    },
    move2CheckPage() {
      const nextPath = this.getPathByServiceType();
      // 앞으로 결제할 보관함 정보 넘겨 보관함 선점하기
      this.$router.push({
        path: nextPath,
        query: {serviceType: this.$route.query.serviceType},
      });
    },
    testInitStorage() {
      this.$store.commit('setStorage', lockerData);
      // if (this.$route.query.serviceType == '맡길게요')
      //   this.$axios
      //     .get(`/order/storage/테스트역1`)
      //     .then((response) => {
      //       this.$store.commit('setStorage', response.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // if (this.$route.query.serviceType == '보관할게요')
      //   this.$axios
      //     .get(`/store/storage/테스트역1`)
      //     .then((response) => {
      //       this.$store.commit('setStorage', response.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
    },
    initStorage() {
      if (this.$route.query.serviceType == '맡길게요')
        this.$axios
          .get(`/order/storage/${this.getStationName()}`)
          .then((response) => {
            this.$store.commit('setStorage', response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      if (this.$route.query.serviceType == '보관할게요')
        this.$axios
          .get(`/store/storage/${this.getStationName()}`)
          .then((response) => {
            this.$store.commit('setStorage', response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  mounted() {
    this.testInitStorage();
    // this.initStorage();
  },
  components: {
    lockerInfo,
    noticeBox,
  },
};
</script>

<style>
.lockerPage_content {
  overflow: scroll;
  height: 92.7vh;
  scrollbar-width: none;
}
.lockerPage_content::-webkit-scrollbar {
  display: none;
}
.lockerPage_station {
  margin: 4vh 0vw 0vh 10vw;
}
.lockerPage_station_name {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.lockerPage_station_location {
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
.lockerPage_noticeBox {
  width: 83vw;
}
.lockerPage_button {
  border: none;
  display: block;
  margin: 5.6vh auto 3vh;
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
</style>
