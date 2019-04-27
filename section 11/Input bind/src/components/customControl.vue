<template>
  <div>
    <div
      id="on"
      @click="congtac(true)"
      :class="{active: valueApp}">On</div>
    <div
      id="off"
      @click="congtac(false)"
      :class="{active: !valueApp}">Off</div>
  </div>
</template>

<script>
  export default {
    props:['valueApp'],
    methods:{
      // gửi thông báo qua v-model bên app.vue
      congtac(isOn){
        this.$emit('input',isOn)
      }
    }
  }
</script>

<style scoped>
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }

  #on:hover, #on.active {
    background-color: lightgreen;
  }

  #off:hover, #off.active {
    background-color: lightcoral;
  }
</style>
