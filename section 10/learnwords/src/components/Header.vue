<template>
  <div class="row">
    <div class="col-sm-12">
      <span>Item added</span>
      <div class="progress">
        <div class="progress-bar bg-success" :style="{width: (itemCount/ maxItem)*100 +'%'}">
         {{ itemCount}} / {{ maxItem }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    //  hứng giá trị cha
    props: ['itemCount', 'maxItem']
  }
</script>

<style scoped>

</style>
