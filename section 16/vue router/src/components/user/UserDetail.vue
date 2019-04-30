<template>
 <div>
   <h1>this is page user detail</h1>
   <p>user:{{ id }}</p>
   <router-link
     tag="button"
     :to="{ name:'UserEdit', params: this.$route.params.id }"
     class="btn btn-primary"
   >Edit user</router-link>
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
