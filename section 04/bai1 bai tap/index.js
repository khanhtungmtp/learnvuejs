new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameISRunning: false
    },
    methods: {
        startNewGame: function () {
            this.gameISRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            //player
            if (this.checkPlayerOptions()){
                return;
            }
                this.playerHealth -= this.inputDamage(10,12);
            // monster
                this.monsterAttack();
        },
        specialAttack: function () {
            if (this.checkPlayerOptions()){
                return;
            }
            this.monsterHealth -= this.inputDamage(10,12);
            // monster
            this.monsterAttack();
        },
        heal: function () {

        },
        giveUp: function () {

        },
        inputDamage:function (minDamage,maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        monsterAttack:function () {
            this.playerHealth -=this.inputDamage(20,30);
            this.checkPlayerOptions();
        }
        ,
        checkPlayerOptions:function () {
            if (this.playerHealth <=0){
                // nếu chọn ok thì reset game, ngược lại dừng lại xem kết quả
                if (confirm('You win,New game')){
                    this.startNewGame();
                } else {
                    this.gameISRunning=false;
                }
            }else if (this.monsterHealth <=0){
                // nếu chọn ok thì reset game, ngược lại dừng lại xem kết quả
                if (confirm('You lost,New game')){
                    this.startNewGame();
                } else {
                    this.gameISRunning=false;
                }
            }
        }
    }
});