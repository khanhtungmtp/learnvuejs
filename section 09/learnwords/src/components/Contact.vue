<template>
    <div>
      <p>this is contact page {{ counter }}</p>
      <button @click="counter++">Tăng lên </button>
    </div>
</template>

<script>
    export default {
      data:function () {
        return {
          counter:0
        }
      }
    }
</script>

<style scoped>

</style>
