<template>
  <div class="Line2-Containter" ref="Scroll" @scroll="onScroll">
    <img
      src="../../assets/images/노선도.png"
      usemap="#image_map"
      style="margin-left: 100px; margin-top: 100px; margin-bottom: 100px"
    />
    <map name="image_map">
      <area
        v-for="(item, key) in this.line2"
        :key="key"
        :alt="item.name"
        :title="item.name"
        :coords="`${item.left},${item.top},${this.isTransfer(item.isTransfer)}`"
        shape="circle"
        @click="this.mapClickHandler($event, item)"
      />
    </map>
    <StationSelect
      class="StationSelect"
      v-if="this.$store.state.clicked"
      :clickedItem="this.clickedItem"
    ></StationSelect>
  </div>
</template>

<script>
import line2Data from '../../assets/data/Line2.json';
import StationSelect from '../stationSelect.vue';
export default {
  name: 'line-2',
  components: {
    StationSelect,
  },
  data() {
    return {
      line2: line2Data.stations,
      clickedItem: {},
      scrollX: 0,
      scrollY: 0,
      clickedStation: undefined,
    };
  },
  methods: {
    mapClickHandler(event, item) {
      if (this.$store.state.clicked) {
        this.$store.commit('setClicked', false);
      }
      if (this.clickedStation == undefined) {
        console.log('>> current Clicked Station :: undefined');
        this.clickedStation = item.name;
      } else if (this.clickedStation == item?.name) {
        console.log('>> current Clicked Station :: ', this.clickedStation);
        console.log('>> current Selected Station :: ', item);
        this.$store.commit('setClicked', false);
        return;
      }
      this.$store.commit('setClicked', true);
      this.clickedItem = {
        ...item,
        x: event.clientX + this.scrollX,
        y: event.clientY + this.scrollY,
      };
      this.$store.commit('setSelectedStation', item);
    },
    onScroll() {
      const scrollDiv = this.$refs.Scroll;
      this.scrollX = scrollDiv?.scrollLeft;
      this.scrollY = scrollDiv?.scrollTop;
    },
    isTransfer(transfer) {
      if (transfer) {
        return 8;
      }
      return 6;
    },
  },
};
</script>

<style>
.Line2-Containter {
  position: relative;
  overflow: auto;
  width: 390px;
  height: 844px;
}
</style>
