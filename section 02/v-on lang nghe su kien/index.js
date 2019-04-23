new Vue({
    el:"#obj",
    data:{
        title:"Cách bind thứ 2",
        dem:0,
        x:0,
        y:0,
    },
    methods:{
        tangGiaTri:function () {
            this.dem++;
        },
        thayDoiToaDo:function (event) {
            this.x=event.clientX;
            this.y=event.clientY;
        },
        dungToaDo:function (event) {
            event.stopPropagation();
        },
        banPhim:function () {
            alert('thực hành keyup bàn phím');
        }
    }
});