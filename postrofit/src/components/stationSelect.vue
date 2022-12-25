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
  methods :{
    clickedStart(){
      this.$store.commit('setStartStation',this.clickedItem)
      this.$store.commit('setSelectedStation',{clicked:})
    }
  }
};
</script>

<style>
.stationSelect_container {
  display: flex;
  position: absolute;
  /* Layout Properties */

  top: v-bind(top);
  left: v-bind(left);
  /* top: 456px; */
  /* left: 178px; */
  width: 113px;
  height: 43px;
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
  color: white;
  position: relative;
  /* Layout Properties */
  /* top: 456px; */
  /* left: 236px; */
  width: 55px;
  height: 35px;
  /* UI Properties */
  background: var(--unnamed-color-707070) 0% 0% no-repeat padding-box;
  background: #707070 0% 0% no-repeat padding-box;
  opacity: 1;
}
.stationSelect_arrow_down_right::after {
  content: " ";
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
  content: " ";
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
