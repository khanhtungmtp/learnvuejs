<template>
  <div>
    <h1>User edit</h1>
    <ul>
      <li>locate: {{ $route.query.locate }}</li>
      <li>locate: {{ $route.query.browser }}</li>
    </ul>
    <button
      class="btn btn-danger"
      @click="show">Click để thay đổi
    </button>
    <div style="height: 700px"></div>
    <h3 id="helloFragment">Sử dụng hash fragments</h3>
    <div style="height: 1700px"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: false
      }
    }, methods: {
      show() {

      }
    },

  }
</script>

<style scoped>

</style>
