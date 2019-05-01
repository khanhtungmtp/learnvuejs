<template>
  <div>
    <p>this is {{ tenResult }} ten result</p>
    <p>this is {{ otherResult }} other result</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  // computed luôn chạy trước khi dữ liệu đc load
  export default {
    // props:['result'],
    computed:{
      ...mapGetters(['tenResult','otherResult']),
      otherFunctionOnComputed(){
      //  xài thêm hàm khác nếu có
      }
      // result(){
      //   // truy cập vào result trong store.js, this.$store.state là model
      //   this.$store.state.result
      // }
    }
  }
</script>

<style scoped>

</style>
