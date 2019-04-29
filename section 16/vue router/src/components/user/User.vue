<template>
  <div>
    <h1>User page</h1>
    <button @click="backHome" class="btn btn-danger">Back to Home</button>
  </div>
</template>

<script>
    export default {
        methods:{
          backHome(){
            this.$router.push('/')
          }
        }
    }
</script>

<style scoped>

</style>
