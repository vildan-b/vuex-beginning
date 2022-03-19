const state = {
    counter : 0,
    counter2 : 0,
}

const getters ={
    getDoubleCounter(state){
        return state.counter * 2;
    },
    getStringCounter(state){
        return "clicked " + state.counter2 + " times";
    },
    
}

const mutations = {
    increaseCounter(state){
        state.counter++;
        state.counter2++;
    },
    decreaseCounter(state){
        state.counter--;
    }
}

const actions = {
    increment({commit}, payload){
        commit("increaseCounter", payload )

    },
    decrement({commit}) {
        commit("decreaseCounter")
    },
    incAsync({commit} , payload){
        setTimeout(() => {
            commit("increaseCounter")
        }, payload.time)

    },
}
export default {
    state,
    getters,
    mutations,
    actions
}