<template>
  <div class="row">
    <form>
      <div class="col-sm-8 sm-offset-2 col-md-6 form-group">
        <label>Title item</label>
        <textarea v-model="item" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="col-sm-8 sm-offset-2 col-md-6 form-group">
        <!--   @click.prevent ngăn ko cho load lại trang       -->
        <button class="btn btn-success" @click.prevent="createNewItem">Create new item</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        item: ''
      }
    },
    methods: {
      createNewItem() {
        this.$emit('itemAdded', this.item);
        //   cho rỗng khi đã add xong
        this.item = '';
      }
    }
  }
</script>

<style scoped>

</style>
