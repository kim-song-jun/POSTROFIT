<template>
  <div>
    <img
      src="../../assets/images/노선도.png"
      usemap="#image_map"
      style="margin-left: 100px"
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
    };
  },
  methods: {
    clickHandler(event, item) {
      console.log(event.clientX);
      console.log(event.clientY);
      this.$store.commit('toggleClicked');
      // item.left = item.left + 100;
      this.clickedItem = {
        x: event.clientX,
        y: event.clientY,
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
.line2_popup {
  background-color: black;
  color: white;
  /* 110,296,8 */
  border-radius: 10px;
  width: 8px;
  height: 8px;
  top: 292px;
  left: 106px;
  position: absolute;
}
</style>
