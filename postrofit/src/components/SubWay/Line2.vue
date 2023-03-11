<template>
  <div class="Line2-Containter">
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
        @click="this.clickHandler($event, item)"
      />
    </map>
    <StationSelect
      class="StationSelect"
      v-if="$store.state.clicked"
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
      currentX: 0,
      currentY: 0,
    };
  },
  methods: {
    clickHandler(event, item) {
      console.log(event.clientX);
      console.log(event.clientY);
      this.$store.commit('toggleClicked');
      this.currentX = event.clientX;
      this.currentY = event.clientY;
      // item.left = item.left + 100;
      this.clickedItem = {
        x: this.currentX,
        y: this.currentY,
      };
      this.$store.commit('setSelectedStation', item);
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
