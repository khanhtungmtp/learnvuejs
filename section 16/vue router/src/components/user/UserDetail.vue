<template>
 <div>
   <h1>this is page user detail</h1>
   <p>user:{{ id }}</p>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>
