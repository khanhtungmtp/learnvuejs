<template>
  <div>
    <div class="title">
      <h2>{{ cardWords }}</h2>
      <p>This is my car</p>
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['cardWords']
  }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
    padding: 30px;
    margin: 20px auto;
    text-align: center;
  }

  h1 {
    color: #ff3f43;
  }
</style>
