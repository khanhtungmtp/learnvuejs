<template>
  <div id="app">
    <result></result>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'

export default {
  name: 'app',
  components: {
    Counter, Result
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
