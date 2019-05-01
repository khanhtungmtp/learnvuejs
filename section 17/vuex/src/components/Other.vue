<template>
  <p>this is {{ $store.state.result }}</p>
</template>

<script>
  // computed luôn chạy trước khi dữ liệu đc load
  export default {
    // props:['result'],
    computed:{
      result(){
        // truy cập vào result trong store.js, this.$store.state là model
        this.$store.state.result
      }
    }
  }
</script>

<style scoped>

</style>
