import {createStore} from 'vuex';

const store = createStore({
  state() {
    return {
      StartStation: {},
      EndStation: {},
      SelectedStation: {},
      clicked: false,
      openSelected: false,
    };
  },
  mutations: {
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
    toggleClicked(state) {
      state.clicked = !state.clicked;
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
