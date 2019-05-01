<template>
  <div id="app">
    <h1>vuex section</h1>
    <hr>
    <app-counter @updateCounter="result += $event"></app-counter>
    <hr>
    <!-- lấy từ props result  -->
    <app-result :result="result"></app-result>
  </div>
</template>

<script>
  import appCounter from './components/Counter'
  import appResult from './components/Result'

  export default {
    name: 'app',
    data() {
      return {
        result: 0
      }
    },
    components: {
      appCounter, appResult
    }
  }
</script>

<style>

</style>
