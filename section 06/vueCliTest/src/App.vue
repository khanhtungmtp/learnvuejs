<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <server></server>
      <app-server-detail></app-server-detail>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  // forder shared
  import Header from './components/shared/Header';
  import Footer from './components/shared/Footer';

  // forder servers
  import Server from './components/servers/Server';
  import ServerDetail from './components/servers/ServerDetail';

  export default {
    components: {
      appHeader: Header, // app-header
      Server, // server
      'app-server-detail': ServerDetail,
      'app-footer': Footer

    }
  }
</script>

<style>


</style>
