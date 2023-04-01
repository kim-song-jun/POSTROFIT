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
      userStore: {},
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
    setUserStore(state, userStore) {
      state.userStore = {...userStore};
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
