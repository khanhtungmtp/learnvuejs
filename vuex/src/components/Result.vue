<template>
    <div>
        <p>kết quả {{ result }}</p>
    </div>
</template>

<script>
    export default {
        name: "Result",
        computed: {
            // computed là chạy trước khi load
            // $store đại diện cho đối tượng new Vuex.Store sao đó truy cập > state > count
            result () {
                // lấy bằng state
                // return this.$store.state.count
            //    lấy bằng getter
                return this.$store.getters.ResultGetter
            }
        }
    }
</script>

<style scoped>

</style>
