<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Default Build directive</h1>
        <p v-text="'appen text in p tag'"></p>
        <hr>
        <p v-html="'<h1>appen html h1 tag in p tag</h1>'"></p>
      </div>
      <div class="col-sm-12">
        <h1>Custom Build directive</h1>
        <p v-highlight="'yellow'">Hello directives</p>
        <p v-highlight:background="'yellow'">Hello directives</p>

      </div>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style>

</style>
