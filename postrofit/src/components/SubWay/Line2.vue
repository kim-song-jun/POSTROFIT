<template>
  <div class="Line2">
    <img
      class="image"
      usemap="#image_map"
      @click="imageClicked"
      src="../../assets/images/노선도.png"
    />

    <map name="image_map">
      <area
        v-for="(item, key) in this.line2"
        :key="key"
        :alt="item.name"
        :title="item.name"
        :coords="`${item.left},${item.top},${this.isTransfer(item.isTransfer)}`"
        shape="circle"
        @click="this.clickHandler(item)"
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
    clickHandler(item) {
      console.log('@click >> Line2.vue: clickHandler(item)');
      this.$store.commit('toggleClicked');
      // item.left = item.left + 100;
      this.clickedItem = item;
      this.$store.commit('setSelectedStation', this.clickedItem);

      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      else event.isImmediatePropagationEnabled = false;
    },
    isTransfer(transfer) {
      if (transfer) {
        return 8;
      }
      return 6;
    },
    imageClicked() {
      if (this.$store.state.clicked == true) {
        this.$store.commit('toggleClicked');
      }
    },
  },
};
</script>

<style>
.Line2 {
  overflow: auto;
}
.image {
  /* width: 100%; */
  /* min-width: 100%; */
  margin-left: 100px;
  /* pointer-events: none; */
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;

  /* background-image: url('../../assets/images/노선도.png'); */
}
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
