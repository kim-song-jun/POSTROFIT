<template>
  <div class="stationSelect_container">
    <button
      class="stationSelect_start_btn stationSelect_arrow_down_right"
      @click="clickedStart()"
    >
      출발
    </button>
    <div class="stationSelect_empty"></div>
    <button
      class="stationSelect_end_btn stationSelect_arrow_down_left"
      @click="clickedEnd()"
    >
      도착
    </button>
  </div>
</template>

<script>
export default {
  props: {
    clickedItem: Object,
  },
  data() {
    return {};
  },
  methods: {
    testGetOrderEmpty() {
      const station =
        this.startStation.name == '신당'
          ? '테스트역0'
          : this.startStation.name == '사당'
          ? '테스트역1'
          : '테스트역2';
      return this.$axios.get(`/order/empty/${station}`);
    },
    testGetDeliveryEmpty() {
      const sStation =
        this.startStation.name == '신당'
          ? '테스트역0'
          : this.startStation.name == '사당'
          ? '테스트역1'
          : '테스트역2';
      const eStation =
        this.endStation.name == '신당'
          ? '테스트역0'
          : this.endStation.name == '사당'
          ? '테스트역1'
          : '테스트역2';
      return this.$axios.get(`/delivery/count/orders/${sStation}/${eStation}`);
    },
    getEmpty() {
      Promise.all([this.testGetOrderEmpty(), this.testGetDeliveryEmpty()])
        .then((value) => {
          this.$store.commit('setMainData', {
            ...this.$store.state.mainData,
            orderEmpty: value[0].data,
            deliveryEmpty: value[1].data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clickedStart() {
      this.$store.commit('setStartStation', this.selectStation);
      if (this.endStation?.name == this.selectStation.name) {
        this.$store.commit('setEndStation', {});
      }
      this.$store.commit('setBottomLockerOpen', false);
      const start = this.startStation?.name?.length ?? 0;
      const end = this.endStation?.name?.length ?? 0;
      if (start && end) {
        this.getEmpty();
        this.$store.commit('setBottomMenuCreated', true);
        this.$store.commit('setBottomMenuOpen', true);
      }
    },
    clickedEnd() {
      this.$store.commit('setEndStation', this.selectStation);
      if (this.startStation?.name == this.selectStation.name) {
        this.$store.commit('setStartStation', {});
      }
      this.$store.commit('setBottomLockerOpen', false);
      const start = this.startStation?.name?.length ?? 0;
      const end = this.endStation?.name?.length ?? 0;
      if (start && end) {
        this.getEmpty();
        this.$store.commit('setBottomMenuCreated', true);
        this.$store.commit('setBottomMenuOpen', true);
      }
    },
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
  },
  mounted() {
    console.log(this.clickedItem);
  },
};
</script>

<style>
.stationSelect_container {
  display: flex;
  position: absolute;
  z-index: 5;
  width: 113px;
  height: 43px;
  opacity: 1;
}
.stationSelect_container button {
  margin: 0px;
  padding: 0px;
  border: none;
}
.stationSelect_start_btn,
.stationSelect_end_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  width: 55px;
  height: 35px;
  background: var(--unnamed-color-707070) 0% 0% no-repeat padding-box;
  background: #707070 0% 0% no-repeat padding-box;
  opacity: 1;
}
.stationSelect_arrow_down_right::after {
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  top: 34px;
  right: 0px;
  border: 7px solid transparent;
  border-bottom-width: 0;
  border-right-width: 0;
  border-top-color: #707070;
}
.stationSelect_start_btn {
  border-radius: 10px 10px 0px;
}
.stationSelect_end_btn {
  border-radius: 10px 10px 10px 0px;
}
.stationSelect_arrow_down_left::after {
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  top: 34px;
  left: 0px;
  border: 7px solid transparent;
  border-bottom-width: 0;
  border-left-width: 0;
  border-top-color: #707070;
}
.stationSelect_empty {
  width: 3px;
}
</style>
