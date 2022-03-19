<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
/* eslint no-use-before-define: 2 */
  // eslint-disable-next-line
  /* eslint-disable */
export default {

  name : 'Counter',

  methods : {
    ...mapMutations ([
      "increaseCounter",
      "decreaseCounter"
    ])
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
