import Vue from "vue";
import Vuex from "vuex";
import  counter  from "./modules/counter"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
 
        value : 0
    },
    getters: {
        
        getValue(state){
            return state.value;
        }
    },
    mutations : {
       
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
    },
    modules : {
        counter
    }
});