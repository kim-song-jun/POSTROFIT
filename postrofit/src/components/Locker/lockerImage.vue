<template>
  <div class="lockerImage-container">
    <div
      class="lockerImage-grid"
      :style="`grid-template-rows: repeat(${rows}, 1fr); grid-template-columns: repeat(${columns}, 1fr)`"
    >
      <div
        v-for="(item, index) in lockerflat"
        :key="item.storageNumber"
        class="item"
        :style="`grid-row-end: span ${setRowSpan(
          item.type,
        )}; height: ${setRowHeight(
          item.type,
          46,
        )}; background-color: ${setColor(item.storageStat)}`"
        @click="setSelectBox(index)"
      >
        <div style="margin: 5px">{{ item.storageNumber }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lockerInfo() {
      return {...this.$store.state.storage};
    },
    locker() {
      return this.lockerInfo.locker;
    },
    columns() {
      return Math.max(...this.lockerInfo.locker.map((el) => el.length));
    },
    rows() {
      return this.lockerInfo.locker.length;
    },
    lockerflat() {
      return this.lockerInfo.locker.flat();
    },
  },
  methods: {
    setSelectBox(index) {
      // check box storageStat '사용가능' & change storageStat '사용가능' > '선택'
      if (this.lockerflat[index].storageStat != 'EMPTY') {
        return;
      }
      this.lockerflat.forEach((item) => {
        if (item.storageStat == '선택') {
          item.storageStat = 'EMPTY';
        }
      });
      this.lockerflat[index].storageStat = '선택';

      // store changed lockerInfo data
      this.$store.commit('setStoreData', this.lockerInfo);
    },
    setRowSpan(itemType) {
      if (itemType == 'Controller') {
        return 1;
      }
      if (itemType == 'SMALL') {
        return 1;
      }
      if (itemType == 'MID') {
        return 2;
      }
      if (itemType == 'BIG') {
        return 4;
      }
    },
    setRowHeight(itemType, height) {
      if (itemType == 'Controller') {
        return `${height * 1}px`;
      }
      if (itemType == 'SMALL') {
        return `${height * 1}px`;
      }
      if (itemType == 'MID') {
        return `${height * 2 + 10}px`;
      }
      if (itemType == 'BIG') {
        return `${height * 4 + 30}px`;
      }
    },
    setColor(storageStat) {
      if (storageStat == 'EMPTY') return '#CFCFCF'; // 사용가능 EMPTY
      if (storageStat == 'STORE') return '#707070'; // 사용 중 STORE
      if (storageStat == '선택') return '#D04040';
      if (storageStat == '제어부') return '#6FBB69';
      if (storageStat == '내 보관함') return '#FFC702';
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
