<template>
  <div class="stationSelect_container">
    <button
      class="stationSelect_start_btn stationSelect_arrow_down_right"
      @click="clickedStart()"
    >
      출발
    </button>
    <div class="stationSelect_empty"></div>
    <button
      class="stationSelect_end_btn stationSelect_arrow_down_left"
      @click="clickedEnd()"
    >
      도착
    </button>
  </div>
</template>

<script>
export default {
  props: {
    clickedItem: Object,
  },
  data() {
    return {};
  },
  methods: {
    clickedStart() {},
    clickedEnd() {},
  },
};
</script>

<style>
.stationSelect_container {
  display: flex;
  position: absolute;
  z-index: 5;
  width: 113px;
  height: 43px;
  opacity: 1;
}
.stationSelect_container button {
  margin: 0px;
  padding: 0px;
  border: none;
}
.stationSelect_start_btn,
.stationSelect_end_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  width: 55px;
  height: 35px;
  background: var(--unnamed-color-707070) 0% 0% no-repeat padding-box;
  background: #707070 0% 0% no-repeat padding-box;
  opacity: 1;
}
.stationSelect_arrow_down_right::after {
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  top: 34px;
  right: 0px;
  border: 7px solid transparent;
  border-bottom-width: 0;
  border-right-width: 0;
  border-top-color: #707070;
}
.stationSelect_start_btn {
  border-radius: 10px 10px 0px;
}
.stationSelect_end_btn {
  border-radius: 10px 10px 10px 0px;
}
.stationSelect_arrow_down_left::after {
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  top: 34px;
  left: 0px;
  border: 7px solid transparent;
  border-bottom-width: 0;
  border-left-width: 0;
  border-top-color: #707070;
}
.stationSelect_empty {
  width: 3px;
}
</style>
