import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    result: 0
  },
  getters: {
    // state là 1 parameter của arrow function
    tenResult: state => {
      return state.result * 10;
    },
    otherResult: state => {
      return state.result + '  mapGetter array push es2015'
    }
  },
  mutations: {
    incrementsOp(state, n) {
      state.result += n;
    },
    decrement(state) {
      state.result--
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  }
});
