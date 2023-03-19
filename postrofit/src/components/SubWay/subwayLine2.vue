<template>
  <div
    class="Line2-Containter"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
  >
    <img
      ref="image"
      class="Line2-Image"
      src="../../assets/images/노선도.png"
      usemap="#image_map"
      @touchmove.stop.prevent="imgHandleTouchMove"
      @touchstart.stop.prevent="imgHandleTouchStart"
    />
    <map name="image_map">
      <area
        v-for="(item, key) in this.line2"
        :key="key"
        :alt="item.name"
        :title="item.name"
        :coords="`${item.left},${item.top},${this.isTransfer(item.isTransfer)}`"
        shape="circle"
        @click="mapClickHandler($event, key)"
      />
    </map>
    <div v-for="(item, key) in this.line2" :key="key">
      <StationSelect
        v-if="item.open"
        :clickedItem="item"
        :style="{
          top: `${
            item.top * this.scale +
            this.rect.y -
            (39 + this.isTransfer(item.isTransfer) / 2)
          }px`,
          left: `${
            item.left * this.scale +
            this.rect.x -
            (56.5 + this.isTransfer(item.isTransfer) / 2)
          }px`,
        }"
      ></StationSelect>
    </div>
  </div>
</template>

<script>
import StationSelect from '../stationSelect.vue';
export default {
  components: {
    StationSelect,
  },
  props: {
    scale: Number,
  },
  data() {
    return {
      line2: [],
      startX: 0,
      startY: 0,
      translateX: 0,
      translateY: 0,
      x: 0,
      y: 0,
      rect: {},
    };
  },
  methods: {
    clickHandler(event) {
      this.line2 = this.line2.map((item) => ({...item, open: false}));
    },
    mapClickHandler(event, key) {
      this.line2 = this.line2.map((item) => ({...item, open: false}));
      const imageRect = this.$refs.image.getBoundingClientRect();
      this.rect = {
        x: imageRect.x,
        y: imageRect.y,
        width: imageRect.width,
        height: imageRect.height,
      };
      this.x = event.clientX;
      this.y = event.clientY;
      this.line2[key].open = true;
    },
    imgHandleTouchStart(event) {
      const touch = event.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
    },
    imgHandleTouchMove(event) {
      const touch = event.touches[0];
      const moveX = touch.clientX - this.startX;
      const moveY = touch.clientY - this.startY;
      this.startX = touch.clientX;
      this.startY = touch.clientY;
      this.translateX += moveX;
      this.translateY += moveY;
      event.target.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
      const imageRect = this.$refs.image.getBoundingClientRect();
      this.rect = {
        x: imageRect.x,
        y: imageRect.y,
        width: imageRect.width,
        height: imageRect.height,
      };

      this.$emit(
        'translate',
        `translate(${this.translateX}px, ${this.translateY}px)`,
      );
    },
    handleTouchStart(event) {
      const touch = event.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
    },
    handleTouchMove(event) {
      const img = event.target.querySelector('img');
      const touch = event.touches[0];
      const moveX = touch.clientX - this.startX;
      const moveY = touch.clientY - this.startY;
      this.startX = touch.clientX;
      this.startY = touch.clientY;
      this.translateX += moveX;
      this.translateY += moveY;
      img.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
      const imageRect = this.$refs.image.getBoundingClientRect();
      this.rect = {
        x: imageRect.x,
        y: imageRect.y,
        width: imageRect.width,
        height: imageRect.height,
      };

      this.$emit(
        'translate',
        `translate(${this.translateX}px, ${this.translateY}px)`,
      );
    },
    isTransfer(transfer) {
      return transfer ? 8 : 6;
    },
  },
  mounted() {},
  created() {
    this.line2 = [...this.$store.state.LINE2_JSON.stations];
  },
};
</script>

<style>
.point {
  background-color: black;
  width: 10px;
  height: 10px;
  position: absolute;
  z-index: 20;
}
.Line2-Containter {
  position: relative;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.Line2-Image {
  user-select: none;
  touch-action: pan-x pan-y;
  transform-origin: 0 0;
}
</style>
