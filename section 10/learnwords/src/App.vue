<template>
  <div class="container">
    <app-item-layout :itemsProps="items"></app-item-layout>
<!-- @itemAdded là emit bên newItem.vue submit form gửi qua, addItem là method   -->
    <app-new-item @itemAdded="addItem"></app-new-item>
  </div>
</template>

<script>
  import ItemLayout from './components/ItemLayout.vue';
  import NewItem from './components/NewItem.vue';

  export default {
    data: function () {
      return {
        items: [

        ]
        ,
        maxItem: 10
      }
    },
    components:{
      // (giống đăng ký thẻ html)tạo components rồi gán vào để sử dụng được thẻ app-item-layout
      appItemLayout:ItemLayout,
      appNewItem:NewItem
    },
    methods:{
      // parameter item lưu lại giá trị mà form đã nhập bên form newItem.vue
      addItem(item){
        // thêm vào mảng items data bên trên
        this.items.push(item);
      }
    }
  }
</script>

<style>

</style>
