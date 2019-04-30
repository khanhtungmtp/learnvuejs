<template>
   <div>
     <h1>User edit</h1>
     <ul>
       <li>locate: {{ $route.query.locate }}</li>
       <li>locate: {{ $route.query.browser }}</li>
     </ul>
   </div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>
