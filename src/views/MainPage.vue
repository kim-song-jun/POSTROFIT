<template>
  <div class="MainPage-Container">
    <topMenu @translate="setTranslate" :scale="this.scale"></topMenu>
    <MainButton @scale="setScale" :translate="this.translate"></MainButton>
    <subwayLine2 @translate="setTranslate" :scale="this.scale"></subwayLine2>
    <bottomMenu
      v-if="this.$store.state.bottomMenuOpen"
      class="animate__animated animate__fast"
      :class="setSlider(this.$store.state.bottomMenuOpen)"
    />
    <bottomLocker
      v-if="
        this.$store.state.bottomLockerOpen && !this.$store.state.bottomMenuOpen
      "
      class="animate__animated animate__fast"
      :class="setSlider(this.$store.state.bottomLockerOpen)"
    />
  </div>
</template>

<script>
import topMenu from '../components/Main/topMenu.vue';
import bottomMenu from '../components/Main/bottomMenu.vue';
import bottomLocker from '../components/Main/bottomLocker.vue';
import subwayLine2 from '../components/SubWay/subwayLine2.vue';
import MainButton from '../components/mainButton.vue';
import 'animate.css';
export default {
  components: {
    topMenu,
    bottomMenu,
    bottomLocker,
    subwayLine2,
    MainButton,
  },
  data() {
    return {
      translate: 'translate(0px, 0px)',
      scale: 1,
    };
  },
  methods: {
    setSlider(state) {
      if (state) return 'animate__slideInUp';
      return 'animate__slideOutDown';
    },
    setTranslate(value) {
      this.translate = value;
    },
    setScale(value) {
      this.scale = value;
    },
    getSize(size) {
      if (size == 'SMALL') return '소형';
      if (size == 'MID') return '중형';
      if (size == 'BIG') return '대형';
      return '?';
    },
    testGetStore() {
      return this.$axios.get(`/user/store/${this.$store.state.userID}`);
    },
    testGetHistory() {
      return this.$axios.get(`/user/history/${this.$store.state.userID}`);
    },
    mapUserStore(stores) {
      return stores.map((store) => {
        return {
          location: '서울특별시 동작구 남부순환로 지하2089',
          station: store?.stationName ?? '?',
          storageId: store.storageId,
          storeId: store.storeId,
          size: this.getSize(store.storageSize),
          date: `${store.timestamp.slice(0, 4)}/${store.timestamp.slice(
            5,
            7,
          )}/${store.timestamp.slice(8, 10)}`,
          time: store.timestamp.slice(11, 16),
          fee: store.price,
        };
      });
    },
    mapUserHistory(history) {
      return history.map((el) => {
        return {
          orderId: el?.orderId ?? null,
          storeId: el?.storeId ?? null,
          deliveryId: el?.deliveryId ?? null,
          place: [el.startStationName, el.endStationName],
          price: el.price,
          date: el.createAt.slice(5, 10),
          urn: el.orderStat == 'WAIT' ? 'active' : 'end',
          hisType: el.orderStat == 'WAIT' ? 'active' : 'end',
          type: el?.orderId
            ? '맡길게요'
            : el?.storeId
            ? '보관할게요'
            : '옮길게요',
          size: this.getSize(el?.size),
          stat: el.orderStat,
        };
      });
    },
    setUserData() {
      Promise.all([this.testGetStore(), this.testGetHistory()])
        .then((responses) => {
          if (Array.isArray(responses[0].data) && responses[0].data.length > 0)
            this.$store.commit('setUserStore', {
              storeList: [...this.mapUserStore(responses[0].data)],
            });

          if (Array.isArray(responses[1].data) && responses[1].data.length > 0)
            this.$store.commit(
              'setUserHistory',
              this.mapUserHistory(responses[1].data),
            );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    if (this.$store.state.userID == Infinity) this.$router.push('/LoginPage');
  },
  mounted() {
    this.setUserData();
  },
};
</script>

<style scoped>
.MainPage-Container {
  width: auto;
  height: auto;
}
</style>
