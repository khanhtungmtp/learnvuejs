<template>
  <div class="container">
    <app-item-layout :itemsProps="items"></app-item-layout>
  </div>
</template>

<script>
  import ItemLayout from './components/ItemLayout.vue';

  export default {
    data: function () {
      return {
        items: [
          'data item section 10',
          'hello world'
        ]
        ,
        maxItem: 10
      }
    },
    components:{
      // tạo components rồi gán vào để sử dụng được thẻ app-item-layout
      appItemLayout:ItemLayout
    }
  }
</script>

<style>

</style>
