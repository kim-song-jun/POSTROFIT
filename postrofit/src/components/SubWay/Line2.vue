<template>
  <div class="Line2-Containter" ref="Scroll" @scroll="onScroll">
    <img
      class="Line2-Image"
      src="../../assets/images/노선도.png"
      usemap="#image_map"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
      @wheel="handleWheel"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
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
// import StationSelect from '../stationSelect.vue';
export default {
  name: 'line-2',
  components: {
    // StationSelect,
  },
  data() {
    return {
      line2: line2Data.stations,
      clickedItem: {},
      scrollX: 0,
      scrollY: 0,
      clickedStation: undefined,
      // df
      startX: 0,
      startY: 0,
      translateX: 0,
      translateY: 0,
      scale: 1,
    };
  },
  methods: {
    handleMouseDown(event) {
      this.startX = event.clientX;
      this.startY = event.clientY;
      event.target.style.cursor = 'grabbing';
    },
    handleMouseUp(event) {
      event.target.style.cursor = 'move';
    },
    handleMouseMove(event) {
      if (!event.buttons) {
        event.target.style.cursor = 'move';
        return;
      }
      const moveX = event.clientX - this.startX;
      const moveY = event.clientY - this.startY;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.translateX += moveX;
      this.translateY += moveY;
      event.target.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
    },
    handleWheel(event) {
      event.preventDefault();
      const delta = Math.max(-1, Math.min(1, event.deltaY));
      if (delta < 0) {
        this.scale += 0.1;
      } else {
        this.scale -= 0.1;
      }
      this.scale = Math.max(0.1, Math.min(3, this.scale));
      event.target.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
    },
    handleTouchStart(event) {
      const touch = event.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
    },
    handleTouchEnd(event) {
      event.target.style.cursor = 'move';
    },
    handleTouchMove(event) {
      const touch = event.touches[0];
      const moveX = touch.clientX - this.startX;
      const moveY = touch.clientY - this.startY;
      this.startX = touch.clientX;
      this.startY = touch.clientY;
      this.translateX += moveX;
      this.translateY += moveY;
      event.target.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
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
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.Line2-Image {
  width: 100%;
  height: auto;
  cursor: move;
  user-select: none;
  touch-action: pan-x pan-y;
  transform-origin: 0 0;
}
</style>
