<template>
  <div>
    <page-header></page-header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/layout/Header'
  export default {
    components:{
      PageHeader
    }
  }
</script>

<style>

</style>
