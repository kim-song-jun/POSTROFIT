<template>
  <div class="bottomMenu_container">
    <menuBar />
    <div class="bottomMenu_content">
      <div class="bottomMenu_column" @click="move2SelectPage">
        <div class="bottomMenu_source">{{ this.startStation.name }}</div>
        <div class="bottomMenu_post_container">
          <div class="bottomMenu_post_content1">
            <img
              class="bottomMenu_image"
              src="../../assets/images/dice1.png"
              alt=""
            />
            맡길게요
          </div>
          <div class="bottomMenu_post_content2">
            <span class="bottomMenu_size"
              >중형 {{ orderEmpty?.midCount ?? '?' }}개</span
            >
            <span class="bottomMenu_size"
              >소형 {{ orderEmpty?.smallCount ?? '?' }}개</span
            >
          </div>
        </div>
      </div>
      <img
        class="bottomMenu_arrow"
        src="../../assets/images/arrow.png"
        alt=""
      />
      <div class="bottomMenu_column" @click="move2LockerPage">
        <div class="bottomMenu_destination">{{ this.endStation.name }}</div>
        <div class="bottomMenu_post_container">
          <div class="bottomMenu_post_content1">
            <img
              class="bottomMenu_image"
              src="../../assets/images/dice1.png"
              alt=""
            />
            옮길게요
          </div>
          <div class="bottomMenu_post_content2">
            <span class="bottomMenu_size"
              >중형 {{ deliveryEmpty?.midCount ?? '?' }}개</span
            >
            <span class="bottomMenu_size"
              >소형 {{ deliveryEmpty?.smallCount ?? '?' }}개</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuBar from '../menuBar.vue';

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
    orderEmpty() {
      return this.$store.state.mainData.orderEmpty;
    },
    deliveryEmpty() {
      return this.$store.state.mainData.deliveryEmpty;
    },
  },
  methods: {
    move2SelectPage() {
      this.$store.commit('setServiceType', '맡길게요');
      this.$router.push('/SelectPage');
    },
    move2LockerPage() {
      this.$store.commit('setServiceType', '옮길게요');
      this.$router.push('/SelectPage/lockerPage');
    },
    testGetOrderEmpty() {
      return this.$axios.get(`/order/empty/테스트역1`);
    },
    testGetDeliveryEmpty() {
      return this.$axios.get(`/delivery/count/orders/테스트역1/테스트역2`);
    },
    getEmptyData() {
      Promise.all([this.testGetOrderEmpty(), this.testGetDeliveryEmpty()])
        .then((value) => {
          this.$store.commit('setMainData', {
            orderEmpty: {...value[0].data},
            deliveryEmpty: {...value[1].data},
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getEmptyData();
  },
  components: {
    menuBar,
  },
};
</script>

<style>
.bottomMenu_container {
  position: absolute;
  z-index: 9999;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 23vh;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #fff 0% 0% no-repeat padding-box;
  opacity: 1;
}
.bottomMenu_image {
  width: 7.5vw;
  height: 7.5vw;
}
.bottomMenu_content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottomMenu_column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4vw;
  /* Layout Properties */
  width: 39vw;
  height: 28vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-6fbb69); */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #6fbb69;
  border-radius: 2.5vw;
  opacity: 1;
}
.bottomMenu_source,
.bottomMenu_destination {
  margin-bottom: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* Layout Properties */
  width: 29vw;
  height: 7.5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    17px/23px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69); */
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.bottomMenu_post_container {
  display: flex;
}
.bottomMenu_post_content1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5vw;
  /* Layout Properties */
  width: 11vw;
  height: 3vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.bottomMenu_post_content2 {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.bottomMenu_size {
  margin-bottom: 2vw;
  /* Layout Properties */
  height: 5vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    16px/21px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.bottomMenu_post_bar {
  margin: 0 2.5vw;
  /* Layout Properties */
  width: 0.8vw;
  height: 17.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-cfcfcf) 0% 0% no-repeat padding-box; */
  background: #888 0% 0% no-repeat padding-box;
  border-radius: 10vw;
  opacity: 1;
}
.bottomMenu_arrow {
  margin: 0vw 2.5vw;
  width: 5vw;
  height: 3vw;
}
</style>
