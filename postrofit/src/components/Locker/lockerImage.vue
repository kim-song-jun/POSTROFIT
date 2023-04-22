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
          item.storageSize,
        )}; height: ${setRowHeight(
          item.storageSize,
          46,
        )}; background-color: ${setColor(item.storageStat, item.storageSize)}`"
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
    columns() {
      return Math.max(
        ...this.$store.state.storage.locker.map((el) => el.length),
      );
    },
    rows() {
      return this.$store.state.storage.locker.length;
    },
    lockerflat() {
      return this.$store.state.storage.locker.flat();
    },
    serviceType() {
      return this.$store.state.serviceType;
    },
    orderData() {
      return this.$store.state.orderData;
    },
  },
  methods: {
    findLocker(lockerflat, storageStat) {
      // 선택된 locker 정보 저장
      let selectedLocker = {};
      lockerflat.forEach((item) => {
        if (item.storageStat == storageStat)
          selectedLocker = {selectedLocker: item};
      });
      return selectedLocker;
    },
    setSelectBox(index) {
      // 보관함 상태가 EMPTY 이고, size가 앞에서 고른 사이즈와 동일할 때
      if (
        !(
          this.lockerflat[index].storageStat == 'EMPTY' &&
          this.lockerflat[index].storageSize == this.orderData.size
        )
      ) {
        return;
      }
      this.lockerflat.forEach((item) => {
        if (item.storageStat == '선택') {
          item.storageStat = 'EMPTY';
        }
      });

      this.lockerflat[index].storageStat = '선택';
      if (this.serviceType == '맡길게요')
        this.$store.commit('setOrderData', {
          ...this.$store.state.orderData,
          ...this.findLocker(this.lockerflat, '선택'),
        });
      if (this.serviceType == '보관할게요')
        this.$store.commit('setStoreData', {
          ...this.$store.state.storeData,
          ...this.findLocker(this.lockerflat, '선택'),
        });
        this.$store.commit('setDeliveryData', {
          ...this.$store.state.deliveryData,
          ...this.findLocker(this.lockerflat, 'WAIT'),
        });
    },
    setRowSpan(storageSize) {
      if (storageSize == 'Controller') {
        return 1;
      }
      if (storageSize == 'SMALL') {
        return 1;
      }
      if (storageSize == 'MID') {
        return 2;
      }
      if (storageSize == 'BIG') {
        return 4;
      }
    },
    setRowHeight(storageSize, height) {
      if (storageSize == 'Controller') {
        return `${height * 1}px`;
      }
      if (storageSize == 'SMALL') {
        return `${height * 1}px`;
      }
      if (storageSize == 'MID') {
        return `${height * 2 + 10}px`;
      }
      if (storageSize == 'BIG') {
        return `${height * 4 + 30}px`;
      }
    },
    setColor(storageStat, storageSize) {
      // 선택가능
      if (storageStat == 'EMPTY' && storageSize == this.orderData.size)
        return '#5E62D1';
      if (storageStat == 'EMPTY') return '#CFCFCF'; // 사용가능 EMPTY
      if (storageStat == 'STORE') return '#CFCFCF'; // 사용 중 STORE
      if (storageStat == 'WAIT') return '#CFCFCF';
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
