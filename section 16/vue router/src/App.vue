<template>
  <div>
    <router-view name="page-header"></router-view>
    <div class="container">
      <transition name="tung">
        <!--  default home    -->
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import PageHeader from './components/layout/Header'

  export default {
    components: {
      PageHeader
    }
  }
</script>

<style>
  .tung-leave-active{
    transition: opacity 0.5s ease;
    opacity: 0;
    animation: slide-out 0.5s ease-out forwards;
  }
  .tung-leave{
    opacity: 1;
    transform: translate(0);
  }
  @keyframes slide-out {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(30px);
    }

  }
</style>
