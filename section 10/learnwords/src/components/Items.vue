<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <div class="card-body item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .item{
    cursor: pointer;
  }
  .item:hover{
    background: #aaffb0;
  }
  .card-body{
    font-family: Arial;
    font-size: 25px;
    color: #ff3f43;
  }
</style>
