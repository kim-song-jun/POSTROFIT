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
      deliveryData: {},
      // 맡길게요 기능에 필요한 데이터
      orderData: {},
      // 보관할게요 기능에 필요한 데이터
      storeData: {},
      // 보관함을 그리는데 필요한 데인터
      storage: {locker: []},
      // 이용하는 서비스 구분
      serviceType: '',
      userStore: {},
      userHistory: [],
      userHistoryDetail: {},
    };
  },
  mutations: {
    setBottomMenuCreated(state, bool) {
      state.bottomMenuCreated = bool;
    },
    setBottomLockerCreated(state, bool) {
      state.bottomLockerCreated = bool;
    },
    setBottomMenuOpen(state, bool) {
      state.bottomMenuOpen = bool;
    },
    setBottomLockerOpen(state, bool) {
      state.bottomLockerOpen = bool;
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
    setDeliveryData(state, newData) {
      state.deliveryData = {...newData};
    },
    setOrderData(state, newData) {
      state.orderData = {...newData};
    },
    setStoreData(state, newData) {
      state.storeData = {...newData};
    },
    setStorage(state, storage) {
      state.storage = {...storage};
    },
    setServiceType(state, serviceeType) {
      state.serviceType = serviceeType;
    },
    setUserStore(state, userStore) {
      state.userStore = {...userStore};
    },
    setUserHistory(state, userHistory) {
      state.userHistory = [...userHistory];
    },
    setUserHistoryDetail(state, userHistoryDetail) {
      state.userHistoryDetail = {...userHistoryDetail};
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
    initServiceData(context) {
      context.commit('setDeliveryData', {});
      context.commit('setOrderData', {});
      context.commit('setStoreData', {});
      context.commit('setStorage', {locker: []});
      context.commit('setServiceType', '');
    },
  },
});

export default store;
