<template>
  <div class="bottomLocker_container">
    <menuBar />
    <div class="bottomLocker_stations">
      <div class="bottomLocker_stations_sub bottomLocker_text">
        <div class="bottomLocker_stations_start">
          {{ this.selectStation.pre }}
        </div>
        <div class="bottomLocker_stations_end">
          {{ this.selectStation.next }}
        </div>
      </div>
      <div class="bottomLocker_stations_main">
        {{ this.selectStation.name }}
      </div>
    </div>
    <div class="bottomLocker_usable" @click="move2Lockerpage">
      <div class="bottomLocker_image_container bottomLocker_text">
        <img
          class="bottomLocker_image"
          src="../../assets/images/dice1.png"
          alt=""
        />
        보관할게요
      </div>
      <span class="bottomLocker_size">대형 {{ storeEmpty.bigCount }}개,</span>
      <span class="bottomLocker_size">중형 {{ storeEmpty.midCount }}개,</span>
      <span class="bottomLocker_size">소형 {{ storeEmpty.smallCount }}개</span>
      사용가능
    </div>
  </div>
</template>

<script>
import menuBar from '../menuBar.vue';

export default {
  data() {
    return {
      storeEmpty: {smallCount: '?', midCount: '?', bigCount: '?'},
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
  },
  methods: {
    move2Lockerpage() {
      // issue.F 모달 닫기
      // this.$store.commit('setBottomLockerOpen', false);
      this.$store.commit('setServiceType', '보관할게요');
      // 화면 이동
      this.$router.push('/SelectPage/lockerPage');
    },
    testGetStoreEmpty() {
      this.$axios
        .get('/store/empty/테스트역1')
        .then((response) => {
          this.storeEmpty = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.testGetStoreEmpty();
  },
  components: {
    menuBar,
  },
};
</script>

<style>
.bottomLocker_container {
  position: fixed;
  z-index: 10;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 23vh;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  /* background: #fff 0% 0% no-repeat padding-box; */
  opacity: 1;
}

.bottomLocker_text {
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    10px/13px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-6fbb69);
  /* text-align: left; */
  font: normal normal bold 10px/13px Roboto;
  letter-spacing: 0px;
  opacity: 1;
}
.bottomLocker_stations {
  margin: 5.5vw 0px 7.5vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottomLocker_stations_sub {
  padding: 0px 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Layout Properties */
  /* top: 796px; */
  /* left: 50px; */
  width: 68.5vw;
  height: 4.5vw;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 2.5vw;
  opacity: 1;
  color: #ffffff;
}
.bottomLocker_stations_main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* Layout Properties */
  /* top: 787px; */
  /* left: 143px; */
  width: 29vw;
  height: 8vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-6fbb69); */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #6fbb69;
  border-radius: 2.5vw;
  opacity: 1;
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fafafa); */
  /* text-align: center; */
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #6fbb69;
  opacity: 1;
}
.bottomLocker_usable {
  display: flex;
  align-items: center;
  justify-content: center;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal normal 16px/21px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.bottomLocker_size {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-21)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.bottomLocker_image_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2.5vw;
}
.bottomLocker_image {
  width: 7.5vw;
  height: 7.5vw;
}
.bottomLocker_large {
  color: #d04040;
}
</style>
