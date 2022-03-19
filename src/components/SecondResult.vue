<template>
  <div>
    <p class="counter-container"> Counter : {{ getDoubleCounter }}</p>
        <p class="counter-container"> number of clicks : {{ getStringCounter }}</p>

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
    customProp(){
      
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
