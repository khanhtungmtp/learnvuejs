<template>
  <div>
    <h1>User start from here</h1>
    <ul class="list-group">
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/1"
        style="cursor: pointer"
      >User 1</router-link>
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/2"
        style="cursor: pointer"
      >User 2</router-link>
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/3"
        style="cursor: pointer"
      >User 3</router-link>
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/4"
        style="cursor: pointer"
      >User 4</router-link>
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/5"
        style="cursor: pointer"
      >User 5</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "UserBegin"
  }
</script>

<style scoped>

</style>
