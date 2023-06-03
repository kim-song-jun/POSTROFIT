<template>
  <div class="topMenu_container">
    <div class="topMenu_content">
      <img
        class="topMenu_user_circle"
        src="../../assets/images/user.png"
        alt=""
        @click="move2UserPage"
      />
      <div class="topMenu_bar"></div>
      <div class="topMenu_stations">
        <input
          type="text"
          placeholder="출발역을 입력해주세요"
          class="topMenu_source"
          :value="startStation?.name ?? ''"
          @input="setStartStation"
        />
        <!-- {{ this.$store.state.startStation?.name ?? '출발역' }} -->
        <input
          type="text"
          placeholder="도착역을 입력해주세요"
          class="topMenu_destination"
          :value="endStation?.name ?? ''"
          @input="setEndStation"
        />
        <!-- {{ this.$store.state.endStation?.name ?? '도착역' }} -->
      </div>
      <div class="topMenu_changebtn">
        <img
          class="topMenu_changeArrow"
          src="../../assets/images/changeArrow.png"
          alt=""
          @click="changeStation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {stations} from '../../assets/data/Line2.json';

export default {
  props: {
    scale: Number,
  },
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
  },
  methods: {
    move2UserPage() {
      this.$store.commit('setBottomMenuOpen', false);
      this.$store.commit('setBottomLockerOpen', false);
      this.$router.push('/UserPage');
    },
    setStartStation(event) {
      const img = document.querySelector('.Line2-Image');
      let selectIndex = Infinity;

      for (let i = 0; i < stations.length; i++) {
        if (stations[i].name == event.target.value) selectIndex = i;
      }

      // 사용자가 입력한 이름이 역 이름과 동일한 경우
      if (selectIndex != Infinity) {
        const translateX =
          ((340 - (stations[selectIndex].left - 15)) / 390) *
          window.innerWidth *
          this.scale;
        const translateY =
          ((280 - (stations[selectIndex].top - 128)) / 844) *
          window.innerHeight *
          this.scale;

        img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${this.scale})`;
        this.$emit('translate', `translate(${translateX}px, ${translateY}px)`);
        // 출발역을 입력했을 때 도착역이 이미 입력되어있는 경우
        this.$store.commit('setStartStation', stations[selectIndex]);
        if (this.endStation?.name) {
          this.$store.commit('setSelectStation', {});
          this.$store.commit('setBottomMenuCreated', true);
          this.$store.commit('setBottomMenuOpen', true);
        } else {
          this.$store.commit('setSelectStation', stations[selectIndex]);
          this.$store.commit('setBottomLockerCreated', true);
          this.$store.commit('setBottomLockerOpen', true);
        }
      } else {
        if (this.endStation?.name) {
          this.$store.commit('setSelectStation', this.endStation);
          this.$store.commit('setBottomMenuOpen', false);
          this.$store.commit('setBottomLockerOpen', true);
          if (event.target.value == '' && this.startStation?.name)
            this.$store.commit('setStartStation', {});
        } else {
          this.$store.commit('setBottomLockerOpen', false);
          this.$store.commit('setSelectStation', {});
        }
      }
    },
    setEndStation(event) {
      const img = document.querySelector('.Line2-Image');
      let selectIndex = Infinity;

      for (let i = 0; i < stations.length; i++) {
        if (stations[i].name == event.target.value) selectIndex = i;
      }

      if (selectIndex != Infinity) {
        const translateX =
          ((340 - (stations[selectIndex].left - 15)) / 390) *
          window.innerWidth *
          this.scale;
        const translateY =
          ((280 - (stations[selectIndex].top - 128)) / 844) *
          window.innerHeight *
          this.scale;

        img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${this.scale})`;
        this.$emit('translate', `translate(${translateX}px, ${translateY}px)`);

        this.$store.commit('setEndStation', stations[selectIndex]);
        if (this.startStation?.name) {
          this.$store.commit('setSelectStation', {});
          this.$store.commit('setBottomMenuCreated', true);
          this.$store.commit('setBottomMenuOpen', true);
        } else {
          this.$store.commit('setSelectStation', stations[selectIndex]);
          this.$store.commit('setBottomLockerCreated', true);
          this.$store.commit('setBottomLockerOpen', true);
        }
      } else {
        if (this.startStation?.name) {
          this.$store.commit('setSelectStation', this.startStation);
          this.$store.commit('setBottomMenuOpen', false);
          this.$store.commit('setBottomLockerOpen', true);
          if (event.target.value == '' && this.endStation?.name)
            this.$store.commit('setEndStation', {});
        } else {
          this.$store.commit('setBottomLockerOpen', false);
          this.$store.commit('setSelectStation', {});
        }
      }
    },
    testGetOrderEmpty(startStation) {
      return this.$axios.get(`/order/empty/${startStation}`);
    },
    testGetDeliveryEmpty(startStation, endStation) {
      return this.$axios.get(
        `/delivery/count/orders/${startStation}/${endStation}`,
      );
    },
    changeStation() {
      const tempStation = {...this.startStation};
      this.$store.commit('setStartStation', this.endStation);
      this.$store.commit('setEndStation', tempStation);
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
      Promise.all([
        this.testGetOrderEmpty(sStation),
        this.testGetDeliveryEmpty(sStation, eStation),
      ])
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
};
</script>

<style>
.topMenu_container {
  position: fixed;
  /* Layout Properties */
  top: 5vw;
  left: 3.5vw;
  width: 93vw;
  height: 17.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0303034d;
  border-radius: 5vw;
  opacity: 1;
  z-index: 10;
  padding: 8px 0px 10px;
}
.topMenu_content {
  width: 86vw;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  /* justify-content: center; */
  align-items: center;
  /* position: absolute; */
  /* Layout Properties */
  /* top: 5vw;
  left: 4vw; */
}
.topMenu_user_circle {
  width: 7.5vw;
  height: 7.5vw;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 5vw;
  opacity: 1;
}
.topMenu_stations {
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly;
  align-items: center; */
  width: 100%;
}
.topMenu_bar {
  border-right: 1.5px darkgray solid;
  height: 13.5vw;
  margin: 0vw 2.5vw;
}
.topMenu_changebtn {
  padding: 0px 0px 0px 5px;
}
.topMenu_changeArrow {
  position: relative;
  width: 5.2vw;
  height: 5.2vw;
  margin: 3px;
}
.topMenu_source,
.topMenu_destination {
  margin: 1.5px 0px;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
