<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <h1>làm việc với database firebase</h1>
          <input type="text" class="form-control" v-model="user.username">
          <input type="text" class="form-control" v-model="user.email">
          <button @click="submit" class="btn btn-success">Tạo mới</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        user:{
          username :'',
          email:''
        }
      }
    },
    methods:{
      submit(){
        // console.log(this.user)
        this.$http.post("",this.user)
          .then(response =>{
            console.log(response)
          },error =>{
            console.log(error)
          });
      }
    }
  }
</script>

<style>

</style>
