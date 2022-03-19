<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Plus</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Minus</button>
  <hr>
 <button class="btn btn-success" @click="increment">+ Plus</button>
    <button class="btn btn-danger" @click="decrement">- Minus</button>
    <hr>
   <button class="btn btn-success" @click="incAsync">+ Async Plus</button>
    <hr>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex"
/* eslint no-use-before-define: 2 */
  // eslint-disable-next-line
  /* eslint-disable */
export default {

  name : 'Counter',

  methods : {
    ...mapMutations ([
      "increaseCounter",
      "decreaseCounter"
    ]),
    ...mapActions([
      "increment",
      "decrement",
      "incAsync"
    ])
    // increment(){
    //   this.$store.dispatch("increment")
    // },
    //     decrement(){
    //   this.$store.dispatch("decrement")
    // },

    //     incrementAsync(){
    //   this.$store.dispatch("incAsync")
    // },
 
    // incrementCounter(){
    //   // this.$emit("counterEvent", 1);
    //   // this.$store.state.counter++;
    //   this.$store.commit("increaseCounter");
    // },
    // decrementCounter(){
    //   // this.$emit("counterEvent", -1);
    //   // this.$store.state.counter--;
    //   this.$store.commit("decreaseCounter");
    // }
  }
}
</script>

<style>
</style>
