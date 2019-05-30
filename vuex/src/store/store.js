import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        // state là parameter tên gì cũng được
        ResultGetter (state) {
            return state.count * 10
        },
        OtherResultGetter (state) {
            return state.count + "  this is OtherResultGetter"
        }
    }
})
