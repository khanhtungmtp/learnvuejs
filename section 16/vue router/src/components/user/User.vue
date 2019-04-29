<template>
  <div>
    <h1>User page</h1>
    <button @click="backHome" class="btn btn-danger">Back to Home</button>
    <button @click="goToUser" class="btn btn-warning">Go to user details</button>
    <button @click="goToAdmin" class="btn btn-warning">Go to admin details</button>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    methods: {
      backHome() {
        this.$router.push('/')
      },
      goToUser() {
        this.$router.push('/user/1')
      },
      goToAdmin() {
        this.$router.push('/user/100')
      }
    }
  }
</script>

<style scoped>

</style>
