<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button>
  </div>
</template>

<script>
/* eslint no-use-before-define: 2 */
  // eslint-disable-next-line
  /* eslint-disable */
export default {
  name : 'Counter',

  methods : {
    incrementCounter(){
      // this.$emit("counterEvent", 1);
      this.$store.state.counter++;
    },
    decrementCounter(){
      // this.$emit("counterEvent", -1);
            this.$store.state.counter--;

    }
  }
}
</script>

<style>
</style>
