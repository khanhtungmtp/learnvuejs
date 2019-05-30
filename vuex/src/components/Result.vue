<template>
    <div>
        <p>kết quả mapGetter{{ ResultGetter }}</p>
        <br>
        <p>kết quả của mapGetter  {{ OtherResultGetter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Result",
        computed: {
            // ... là push array ES2015
            ...mapGetters(['ResultGetter','OtherResultGetter'])
            // computed là chạy trước khi load
            // $store đại diện cho đối tượng new Vuex.Store sao đó truy cập > state > count
            // result () {
            //     // lấy bằng state
            //     // return this.$store.state.count
            // //    lấy bằng getter
            //     return this.$store.getters.ResultGetter
            // }

        }
    }
</script>

<style scoped>

</style>
