<template>
  <div class="row">
    <app-item v-for="item in itemsProps" v-bind:data="item" v-bind:key="item">{{ item }}</app-item>
  </div>
</template>

<script>
  import Items from './Items.vue';

  export default {
    //  hứng dữ liệu bên app.vue
    props: ['itemsProps'],
    components: {
      appItem: Items
    }
  }
</script>

<style scoped>

</style>
