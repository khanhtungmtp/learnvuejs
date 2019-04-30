<template>
  <div>
    <router-view name="page-header"></router-view>
    <div class="container">
      <!--  default home    -->
      <router-view/>
    </div>
  </div>
</template>

<script>
  import PageHeader from './components/layout/Header'

  export default {
    components: {
      PageHeader
    }
  }
</script>

<style>

</style>
