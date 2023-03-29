<template>
  <div class="lockerImage-container">
    <div
      class="lockerImage-grid"
      :style="`grid-template-rows: repeat(${rows}, 1fr); grid-template-columns: repeat(${columns}, 1fr)`"
    >
      <div
        v-for="(item, index) in lockerflat"
        :key="item.id"
        class="item"
        :style="`grid-row-end: span ${setRowSpan(
          item.type,
        )}; height: ${setRowHeight(
          item.type,
          46,
        )}; background-color: ${setColor(item.status)}`"
        @click="setSelectBox(index)"
      >
        <div style="margin: 5px">{{ item.id }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import lockerData from '../../assets/data/lockerInfo.json';
export default {
  data() {
    return {
      locker: lockerData.locker,
      columns: Math.max(...lockerData.locker.map((el) => el.length)),
      rows: lockerData.locker.length,
      lockerflat: lockerData.locker.flat(),
    };
  },
  methods: {
    setSelectBox(index) {
      if (this.lockerflat[index].status != '사용가능') {
        return;
      }
      this.lockerflat.forEach((item) => {
        if (item.status == '선택') {
          item.status = '사용가능';
        }
      });
      this.lockerflat[index].status = '선택';
    },
    setRowSpan(item) {
      if (item == 'Controller') {
        return 1;
      }
      if (item == 'N') {
        return 1;
      }
      if (item == 'M') {
        return 2;
      }
      if (item == 'L') {
        return 4;
      }
    },
    setRowHeight(item, height) {
      if (item == 'Controller') {
        return `${height * 1}px`;
      }
      if (item == 'N') {
        return `${height * 1}px`;
      }
      if (item == 'M') {
        return `${height * 2 + 10}px`;
      }
      if (item == 'L') {
        return `${height * 4 + 30}px`;
      }
    },
    setColor(item) {
      if (item == '사용가능') return '#CFCFCF';
      if (item == '사용중') return '#707070';
      if (item == '선택') return '#D04040';
      if (item == '제어부') return '#6FBB69';
      if (item == '내 보관함') return '#FFC702';
    },
  },
};
</script>

<style>
.lockerImage-container {
  width: inherit;
  height: auto;
  overflow: auto;
}
.lockerImage-container::-webkit-scrollbar {
  width: 0px;
}
.lockerImage-grid {
  display: grid;
  grid-auto-flow: row dense;
  gap: 10px;
}
.lockerImage-grid > .item {
  width: 72px;
  height: 46px;
  color: white;
  border-radius: 5px;
  font-size: 12px;
}
</style>
