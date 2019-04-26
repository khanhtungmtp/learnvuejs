<template>
  <div class="row">
    <app-item v-for="(item,index) in itemsProps" v-bind:data="item" v-bind:key="item" @click.native="deleteItem(index)">{{ item }}</app-item>
  </div>
</template>

<script>
  import Items from './Items.vue';

  export default {
    //  hứng dữ liệu bên app.vue
    props: ['itemsProps'],
    components: {
      appItem: Items
    },
    methods:{
      deleteItem(index){
        this.$emit('xoaItem',index);
      }
    }
  }
</script>

<style scoped>

</style>
