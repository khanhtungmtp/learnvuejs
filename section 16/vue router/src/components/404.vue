<template>
  <div>
    <h1>Error page</h1>
    <p>Have some error</p>
    <button @click="backHome">Back to home</button>
  </div>
</template>

<script>
  export default {
    methods:{
      backHome(){
        return this.$router.push({name:'homepage'})
      }
    }
  }
</script>

<style scoped>

</style>
