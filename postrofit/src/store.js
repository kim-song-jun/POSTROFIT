import {createStore} from 'vuex';
import Line2 from '../src/assets/data/Line2.json';
const store = createStore({
  state() {
    return {
      startStation: {},
      endStation: {},
      selectStation: {},
      bottomMenuOpen: false,
      bottomLockerOpen: false,
      bottomMenuCreated: false,
      bottomLockerCreated: false,
      LINE2_JSON: {},
      // 옮길게요 기능에 필요한 데이터
      deliveryData: null,
      // 맡길게요 기능에 필요한 데이터
      orderData: null,
      // 보관할게요 기능에 필요한 데이터
      storeData: null,
      // 보관함을 그리는데 필요한 데인터
      storage: null,
    };
  },
  mutations: {
    setBottomMenuCreated(state, bool) {
      state.bottomMenuCreated = bool;
    },
    setBottomLockerCreated(state, bool) {
      state.bottomLockerCreated = bool;
    },
    setBottomLockerOpen(state, bool) {
      state.bottomLockerOpen = bool;
    },
    setBottomMenuOpen(state, bool) {
      state.bottomMenuOpen = bool;
    },
    setSelectStation(state, selectStation) {
      state.selectStation = {...selectStation};
    },
    setEndStation(state, endStation) {
      state.endStation = {...endStation};
    },
    setStartStation(state, startStation) {
      state.startStation = {...startStation};
    },
    initLine2Json(state) {
      state.LINE2_JSON = {
        ...Line2,
        stations: Line2.stations.map((item) => ({...item, open: false})),
      };
      console.log(state.LINE2_JSON);
    },
    setDeliveryData(state, deliveryData) {
      state.deliveryData = {...deliveryData};
    },
    setOrderData(state, orderData) {
      state.orderData = {...orderData};
    },
    setStoreData(state, storeData) {
      state.storeData = {...storeData};
    },
    setStorage(state, storage) {
      state.storage = {...storage};
    },
  },
  actions: {
    initStation(context) {
      context.commit('setStartStation', {});
      context.commit('setEndStation', {});
      context.commit('setSelectStation', {});
      context.commit('setBottomMenuOpen', false);
      context.commit('setBottomLockerOpen', false);
    },
  },
});

export default store;
