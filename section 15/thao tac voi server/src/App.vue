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

      <div class="col-sm-12">
        <div class="form-group">
          <h1></h1>
          <button @click="getAllData" class="btn btn-primary">Get all data</button>
        </div>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in getUser">
            {{ user.username }} - {{ user.email }}
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        getUser: [],
        resource: {}
      }
    },
    methods: {
      submit() {
        // console.log(this.user)
        this.$http.post("",this.user)
          .then(response =>{
            console.log(response)
          },error =>{
            console.log(error)
          });
       // this.resource.createItem(this.user)
      },
      getAllData() {
        this.$http.get('')
          .then(response => {
            return response.json();
          }).then(data => {
          const newArr = [];
          for (let key in data) {
            newArr.push(data[key]);
          }
          // gán mảng for đã get giá trị cho vào mảng data (this.getUser)
          this.getUser = newArr;
        })
      },
      created() {
        const customResource = {
          createItem: {method: 'POST', url: 'user.json'}
        }
        // url tới database bằng resource
        this.resource = Vue.resource('data.json', {}, customResource)
      }
    }
  }
</script>

<style>

</style>
