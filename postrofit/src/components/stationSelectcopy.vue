<template>
  <div class="stationSelect_container">
    <button class="stationSelect_start_btn stationSelect_arrow_down_right">
      출발
    </button>
    <div class="stationSelect_empty"></div>
    <button class="stationSelect_end_btn stationSelect_arrow_down_left">
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
    return {
      top: this.clickedItem.top - 50 + "px",
      left: this.clickedItem.left + 45 + "px",
    };
  },
};
</script>

<style>
.stationSelect_container {
  display: flex;
  position: absolute;
  /* Layout Properties */

  top: v-bind(top);
  left: v-bind(left);
  width: 28vw;
  height: 10.7vw;
  /* UI Properties */
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
  color: #707070;
  position: relative;
  /* Layout Properties */
  width: 13.7vw;
  height: 8.8vw;
  /* UI Properties */
  /* background: var(--unnamed-color-707070) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 5px #000000e3;
  opacity: 1;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
}
.stationSelect_arrow_down_right::after {
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  top: 8.5vw;
  right: 0px;
  border: 7px solid transparent;
  border-bottom-width: 0;
  border-right-width: 0;
  border-top-color: #ffffff;
}
.stationSelect_start_btn {
  border-radius: 2.5vw 2.5vw 0vw;
}
.stationSelect_end_btn {
  border-radius: 2.5vw 2.5vw 2.5vw 0vw;
}
.stationSelect_arrow_down_left::after {
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  top: 8.5vw;
  left: 0px;
  border: 7px solid transparent;
  border-bottom-width: 0;
  border-left-width: 0;
  border-top-color: #ffffff;
}
.stationSelect_empty {
  width: 0.7vw;
}
</style>
