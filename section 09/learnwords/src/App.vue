<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
<!--    card-words là props bên card.vue      -->
          <app-card card-words="Hello props">
            <p>Giữ chỗ bên trong app-card bằng thẻ slot bên Card.Vue</p>
            <h1>{{ whiteCard }}</h1>
          </app-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './components/Card.vue';

  export default {
    data:function () {
      return {
        whiteCard:'Thử thêm mới data trong slot có hoạt động như bình thường'
      }
    },
    components: {
      appCard: Card
    }
  }
</script>

<style>

</style>
