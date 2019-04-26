<template>
    <div class="row">
      <form>
        <div class="col-sm-8 sm-offset-2 col-md-6 form-group">
          <label>Title item</label>
          <textarea v-model="item" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="col-sm-8 sm-offset-2 col-md-6 form-group">
          <button class="btn btn-success">Create new item</button>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        data:function () {
          return {
            item:''
          }
        }
    }
</script>

<style scoped>

</style>
