<template>
  <div class="lockerInfo_container">
    <div class="lockerInfo_locker">
      <table>
        <tr v-for="(item, key) in this.lockerData" :key="key">
          <td
            class="lockerTable_cell"
            v-for="(value, index) in item"
            :key="index"
            :rowspan="this.setPostSize(value)"
          ></td>
        </tr>
      </table>
    </div>
    <div class="lockerInfo_state">
      <div class="lockerInfo_state_column">
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_using"></div>
          <div class="lockerInfo_state_desc">사용중</div>
        </div>
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_repair"></div>
          <div class="lockerInfo_state_desc">점검중</div>
        </div>
      </div>
      <div class="lockerInfo_state_column">
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_empty"></div>
          <div class="lockerInfo_state_desc">선택가능</div>
        </div>
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_controller"></div>
          <div class="lockerInfo_state_desc">제어부</div>
        </div>
      </div>
      <div class="lockerInfo_state_column">
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_chosen"></div>
          <div class="lockerInfo_state_desc">선택</div>
        </div>
        <div class="lockerInfo_state_row">
          <div class="lockerInfo_state_color lockerInfo_state_mine"></div>
          <div class="lockerInfo_state_desc">내 보관함</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import locker from '../assets/data/locker.json';

export default {
  data() {
    return {
      lockerData: locker.Locker,
      count: 1,
    };
  },
  methods: {
    setPostSize(value) {
      if (value == 'M') {
        return 2;
      } else if (value == 'L') {
        return 4;
      }
      return 1;
    },
    temp(id) {
      console.log(id);
    },
  },
};
</script>

<style>
table {
  border-collapse: separate;
  border-spacing: 10px;
  min-width: 100vw;
  width: 125vw;
}

tr td {
  width: 25vw;
  height: 16vw;
  box-shadow: 0 0 0 10px #fff;
  border-radius: 10px;
  background-color: #707070;
}
.lockerTable_cell {
  vertical-align: text-top;
  padding-left: 10px;
  padding-top: 10px;
}
.lockerInfo_container {
  padding: 4.5vw 0vw 6vw 11vw;
}
.lockerInfo_locker {
  margin-bottom: 10.5vw;
  /* height: 85.5vw; */
  width: 100vw;
  overflow-x: auto;
  margin-left: -3vw;
  margin-right: 3vw;
}
.lockerInfo_state {
  margin-left: 1.5vw;
  display: flex;
}
.lockerInfo_state_column {
  display: flex;
  flex-direction: column;
}
.lockerInfo_state_row {
  display: flex;
  margin: 0vw 0vw 2.5vw;
}
.lockerInfo_state_color {
  margin-right: 1.2vw;
  /* Layout Properties */
  width: 7.2vw;
  height: 4.5vw;
  /* UI Properties */
  /* background: 0% 0% no-repeat padding-box; */
  border-radius: 1.2vw;
  opacity: 1;
}
.lockerInfo_state_using {
  background: #e4e4e4 0% 0% no-repeat padding-box;
}
.lockerInfo_state_empty {
  background: #5e62d1 0% 0% no-repeat padding-box;
}
.lockerInfo_state_chosen {
  background: #d04040 0% 0% no-repeat padding-box;
}
.lockerInfo_state_repair {
  background: #707070 0% 0% no-repeat padding-box;
}
.lockerInfo_state_controller {
  background: #6fbb69 0% 0% no-repeat padding-box;
}
.lockerInfo_state_mine {
  background: #ffc702 0% 0% no-repeat padding-box;
}
.lockerInfo_state_desc {
  margin-right: 1.2vw;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    12px/16px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 12px/16px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
