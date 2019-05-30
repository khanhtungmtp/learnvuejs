<template>
  <div>
    <button class="btn btn-success" @click="increment">Increment</button>
    <button class="btn btn-warning" @click="decrement">Decrement</button>
    <hr>
    <input type="text" v-model="value">
    <p>vuex kết hợp v-model: {{ value }}</p>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {}
    },
    methods: {
      increment() {
        // this.$emit('updateCounter',1)
        //  cách 1 dùng event bus của vuejs
        //  cách 2 dùng store của vuex
        // this.$store.state.result++
      //cách 3 dùng Mutations
        this.$store.commit("incrementsOp",40)
      },
      ...mapMutations(['decrement'])
    },
    computed:{
      value:{
        get(){
          return this.$store.getters.value;
        },
        set(value){
          this.$store.dispatch('updateValue',value);
        }
      }
    }
  }
</script>

<style scoped>

</style>
