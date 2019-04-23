new Vue({
    el: "#obj",
    data: {
        noidung: "Đây là trang chủ",
        title: "this is title",
        link: "https://fb.com/khanhtungmtp",
        testHTML:"<a href='https:youtube.com'>bind link html bằng v-html</a>"
    },
    methods: {
        changeValue: function (event) {
            // event là 1 arguments, ko biết thằng nào thay đổi nên dùng target tìm đối tượng thay đổi qua v-on:input
            this.noidung = event.target.value;
        },
        showPosts: function () {
            // this ở đây chính là đối tượng data.title
            this.noidung="sử dụng v-once để nội dung không thay đổi";
            return this.noidung;
        }
    }
});