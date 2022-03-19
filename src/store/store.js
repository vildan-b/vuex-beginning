import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        counter : 0,
        counter2 : 0,
        value : 0
    },
    getters: {
        getDoubleCounter(state){
            return state.counter * 2;
        },
        getStringCounter(state){
            return "clicked " + state.counter2 + " times";
        },
        getValue(state){
            return state.value;
        }
    },
    mutations : {
        increaseCounter(state){
            state.counter++;
            state.counter2++;
        },
        decreaseCounter(state){
            state.counter--;
        },
        setValue(state , payload){
            state.value = payload;
        }
    },
    actions :{
        increment({commit}){
            commit("increaseCounter")

        },
        decrement({commit}) {
            commit("decreaseCounter")
        },
        incAsync({commit} , payload){
            setTimeout(() => {
                commit("increaseCounter")
            }, payload.time)

        },
        setValueData({commit} , payload) {
                commit("setValue", payload);
        }
    }
});