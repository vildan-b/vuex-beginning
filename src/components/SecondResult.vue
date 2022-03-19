<template>
  <div>
    <p class="counter-container"> Counter : {{ getDoubleCounter }}</p>
        <p class="counter-container"> number of clicks : {{ getStringCounter }}</p>
<input type="text"  v-model="value" > 
<p> Value : {{ value }}</p>
  </div>
</template>
<script>
/* eslint no-use-before-define: 2 */
  // eslint-disable-next-line
  /* eslint-disable */
  import { mapGetters } from "vuex";
  
  export default {
    name: 'Secondresult',

    computed: {
      ...mapGetters([
      'getDoubleCounter',
      'getStringCounter'
    ]),
    value : {
      get(){
                  return this.$store.getters.getValue;

      }, set(value){
        this.$store.dispatch("setValueData", value);
      }
    }
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
