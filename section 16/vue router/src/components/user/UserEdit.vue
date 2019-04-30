<template>
   <div>
     <h1>User edit</h1>
     <ul>
       <li>locate: {{ $route.query.locate }}</li>
       <li>locate: {{ $route.query.browser }}</li>
     </ul>

     <div style="height: 700px"></div>
     <h3 id="helloFragment">Sử dụng hash fragments</h3>
     <div style="height: 1700px"></div>
   </div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>
