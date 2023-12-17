
import { createStore } from 'vuex';
const store = createStore({
    state: {
        pageWidth: window.innerWidth,
        // Your initial state variables go here
    },
    mutations: {
        setPageWidth(state) {
            state.pageWidth = window.innerWidth
        }
        // Your state mutations go here
    },
    actions: {
        // Your actions go here
    },
    getters: {
        getWidth(state) {
            return state.pageWidth
        }
    },
    modules: {
        // If you have separate modules, you can define them here
    }
});


export default store;