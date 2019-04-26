<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-outline-danger" @click="selectedComponents = 'appCard'">Card</button>
          <button class="btn btn-outline-danger" @click="selectedComponents = 'appAbout'">About</button>
          <button class="btn btn-outline-danger" @click="selectedComponents = 'appContact'">Contact</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <!--  card-words là props bên card.vue -->
          <app-card card-words="Hello props">
            <h1 slot="title">{{ whiteCard }}</h1>
            <p slot="content">Giữ chỗ bên trong app-card bằng thẻ slot bên Card.Vue</p>
          </app-card>
          <!--   không bị reset giá trị khi chuyển đổi qua lại các tab Card,About,Contact  -->
          <keep-alive>
            <component :is="selectedComponents"></component>
          </keep-alive>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './components/Card.vue';
  import About from './components/About.vue'
  import Contact from './components/Contact.vue'

  export default {
    data: function () {
      return {
        whiteCard: 'Thử thêm mới data trong slot có hoạt động như bình thường',
        selectedComponents: 'appCard'
      }
    },
    components: {
      appCard: Card,
      appAbout: About,
      appContact: Contact
    }
  }
</script>

<style>

</style>
