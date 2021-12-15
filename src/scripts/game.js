import Monster from './monster';

export default class Game {
    constructor() {
        this.monster = new Monster();
        this.time = 20000;
        this.timeOut = false;
        this.score = 0;
    }

    start() {
        let timer = this.time/1000;
        const scoreBoard = document.querySelector('.score');
        const timerBoard = document.querySelector('.timer');
        scoreBoard.textContent = 0;
        timerBoard.textContent = timer;
        this.timeOut = false
        this.score = 0;
        this.monster.showUp();

        setTimeout(function(){
            this.timeOut = true;
        }, this.time);

        let startTimer = setInterval(function(){
            timer -= 1;
            timerBoard.textContent = timer;
            if (timer < 0) {
                timer = 0;
                clearInterval(startTimer);
                timerBoard.textContent = 'TIMES UP!'
            } 
        }, 1000);
    }

    addListenerToStart() {
        const startButton = document.querySelector('.start');
        let that = this;
        startButton.addEventListener('click', e => {
            e.preventDefault();
            that.start();
        });
    }

}