<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
<!--    card-words là props bên card.vue      -->
          <app-card card-words="Hello props">
            <p>Giữ chỗ bên trong app-card bằng thẻ slot bên Card.Vue</p>
          </app-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './components/Card.vue';

  export default {
    components: {
      appCard: Card
    }
  }
</script>

<style>

</style>
