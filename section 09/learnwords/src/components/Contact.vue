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
      },
      // Lifecycle Hooks: created, destroyed, deactivated, activated
      created(){
        console.log('created contact components');
      },
      destroyed() {
        console.log('destroyed contact components');
      },deactivated() {
        console.log('deactivated contact components');
      },activated() {
        console.log('activated contact components');
      }
    }
</script>

<style scoped>

</style>
