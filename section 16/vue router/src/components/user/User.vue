<template>
  <div>
    <h1>User page</h1>
    <button @click="backHome" class="btn btn-danger">Back to Home</button>
    <button @click="goToUser" class="btn btn-warning">Go to user details</button>
  </div>
</template>

<script>
    export default {
        methods:{
          backHome(){
            this.$router.push('/')
          },
          goToUser(){
            this.$router.push('/user/1')
          }
        }
    }
</script>

<style scoped>

</style>
