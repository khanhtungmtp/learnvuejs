<template>
    <div>
      <button class="btn btn-success" @click="increment">Increment</button>
      <button class="btn btn-warning" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },
      methods:{
          increment(){
            this.$emit('updateCounter',1)
          },
        decrement(){
            this.$emit('updateCounter',-1)
        }
      }
    }
</script>

<style scoped>

</style>
