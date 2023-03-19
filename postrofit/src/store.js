import {createStore} from 'vuex';
import Line2 from '../src/assets/data/Line2.json';
const store = createStore({
  state() {
    return {
      StartStation: {},
      EndStation: {},
      SelectedStation: {},
      clicked: false,
      openSelected: false,
      LINE2_JSON: {},
      LINE2_IMAGE_TRANSFORM: {
        transfromX: 0,
        transfromY: 0,
      },
      LINE2_IMAGE_SCALE: 1,
    };
  },
  mutations: {
    setLine2ImageScale(state, scale) {
      state.LINE2_IMAGE_SCALE = scale;
    },
    setLine2ImageTransfrom(state, data) {
      state.LINE2_IMAGE_TRANSFORM = {...data};
    },
    initLine2Json(state) {
      state.LINE2_JSON = {
        ...Line2,
        stations: Line2.stations.map((item) => ({...item, open: false})),
      };
      console.log(state.LINE2_JSON);
    },
    setOpenSelected(state, openSelected) {
      state.openSelected = openSelected;
    },
    setStartStation(state, start) {
      state.StartStation = start;
    },
    setEndStation(state, end) {
      state.EndStation = end;
    },
    setSelectedStation(state, selected) {
      state.SelectedStation = selected;
    },
    setClicked(state, clicked) {
      state.clicked = clicked;
    },
  },
  actions: {
    initStation(context) {
      context.commit('setStartStation', {});
      context.commit('setEndStation', {});
      context.commit('setSelectedStation', {});
    },
  },
});

export default store;
