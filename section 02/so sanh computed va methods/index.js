new Vue({
    el: "#app",
    data: {
        a:0,
        b:0
    },
    // computed thuc hien 1 function nhung no duoc coi la 1 thuoc tin
    computed:{
        tangA:function () {
            console.log('computed');
            return this.a;
        },
        tangB:function () {
            console.log('computed');
            return this.b;
        }
    }
    ,
    methods: {
        tangAM:function () {
            console.log('methods');
            return this.a;
        },
        tangBM:function () {
            console.log('methods');
            return this.b;
        }
    }
});