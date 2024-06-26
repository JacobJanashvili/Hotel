import { createStore } from "vuex";
const store = createStore({
  state: {
    pageWidth: window.innerWidth,
    isBookingConfirmed: false,
    prevRoute: null,
    // Your initial state variables go here
  },
  mutations: {
    setPageWidth(state) {
      state.pageWidth = window.innerWidth;
    },
    setBookingConfirmation(state) {
      state.isBookingConfirmed = !state.isBookingConfirmed;
    },
    setPrevRoute(state){
        state.prevRoute = state
    }
    // Your state mutations go here
  },
  actions: {
    // Your actions go here
  },
  getters: {
    getWidth(state) {
      return state.pageWidth;
    },
    getBookingConfirmation(state) {
      return state.isBookingConfirmed;
    },
  },
  modules: {
    // If you have separate modules, you can define them here
  },
});

export default store;
