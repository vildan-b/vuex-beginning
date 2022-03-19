<template>
  <div>
    <p class="counter-container"> Counter : {{ counter }}</p>
        <p class="counter-container"> number of clicks : {{ stringCounter }}</p>

  </div>
</template>
<script>
/* eslint no-use-before-define: 2 */
  // eslint-disable-next-line
  /* eslint-disable */
  import { mapGetter } from "vuex";
  
  export default {
    name: 'Secondresult',

    computed: {
      counter(){
        // return this.$store.state.counter * 2;
        return this.$store.getters.getDoubleCounter;
    },
         stringCounter(){
        // return this.$store.state.counter * 2;
        return this.$store.getters.getStringCounter;
    },
  }
  }
</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
