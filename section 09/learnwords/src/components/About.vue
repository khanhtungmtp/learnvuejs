<template>
  <div>
    <p>this is about page</p>
  </div>
</template>

<script>
  export default {
  // Lifecycle Hooks: destroyed, deactivated, activated
    deactivated() {
      console.log('deactivated about components');
    }, activated() {
      console.log('activated about components');
    }
  }
</script>

<style scoped>

</style>
