<template>
  <div class="mainButton-container">
    <PlusButton @click="this.clickPlusButton"></PlusButton>
    <MinusButton @click="this.clickMinusButton"></MinusButton>
  </div>
</template>

<script>
import MinusButton from './Svg/minusButton.vue';
import PlusButton from './Svg/plusButton.vue';

export default {
  components: {PlusButton, MinusButton},
  props: {
    translate: String,
  },
  data() {
    return {
      scale: 1,
    };
  },
  methods: {
    clickPlusButton() {
      const img = document.querySelector('.Line2-Image');
      this.scale += 0.1;
      this.$emit('scale', this.scale);
      img.style.transform = `scale(${this.scale}) ${this.translate}`;
    },
    clickMinusButton() {
      const img = document.querySelector('.Line2-Image');
      this.scale -= 0.1;
      this.$emit('scale', this.scale);
      img.style.transform = `scale(${this.scale}) ${this.translate}`;
    },
  },
};
</script>

<style scoped>
.mainButton-container {
  top: 40vw;
  left: 78vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  justify-content: center;
  align-items: center;
}
</style>
