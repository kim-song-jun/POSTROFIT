import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      StartStation: {},
      EndStation: {},
      SelectedStation: {},
      clicked: false,
    };
  },
  mutations: {
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
});

export default store;
