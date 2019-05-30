<template>
    <div>
        <button class="btn btn-success" @click="tang">Tăng +</button>
        <button class="btn btn-danger" @click="giam">Giảm -</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        methods: {
            // $store đại diện cho đối tượng new Vuex.Store sao đó truy cập > state > count
            tang () {
                // this.$store.state.count++
            //    tăng tùy chọn theo số lương dùng mutations
                this.$store.commit('tangTuyChon', 50)
            },
            giam () {
                this.$store.state.count--
            }
        }
    }
</script>

<style scoped>

</style>
