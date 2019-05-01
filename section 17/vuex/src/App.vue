<template>
  <div id="app">
    <h1>vuex section</h1>
    <hr>
    <!-- cách 1 dùng event bus của vuejs  -->
    <!--    <app-counter @updateCounter="result += $event"></app-counter>-->
    <!-- cách 2 dùng store của vuex   -->
    <app-counter></app-counter>
    <hr>

    <!-- lấy từ props result  -->
    <!--    <app-result :result="result"></app-result>-->
    <app-other></app-other>
    <app-result></app-result>
  </div>
</template>

<script>
  import appCounter from './components/Counter'
  import appResult from './components/Result'
  import appOther from './components/Other'

  export default {
    // name: 'app',
    // data() {
    //   return {
    //     result: 0
    //   }
    // },
    components: {
      appCounter, appResult, appOther
    }
  }
</script>

<style>

</style>
