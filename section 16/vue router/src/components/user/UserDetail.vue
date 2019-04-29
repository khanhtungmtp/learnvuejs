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
    },
    // theo dõi sự thay đổi id
    watch:{
      '$route'(to,from){
        this.id=to.params.id
      }
    }
  }
</script>

<style scoped>

</style>
