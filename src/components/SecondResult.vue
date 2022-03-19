<template>
  <div>
    <p class="counter-container"> Sayaç : {{ counter }}</p>
  </div>
</template>
<script>
/* eslint no-use-before-define: 2 */
  // eslint-disable-next-line
  /* eslint-disable */
  export default {
    name: 'Secondresult',

    computed: {
      counter(){
        return this.$store.state.counter * 2;
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
