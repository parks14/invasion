import Monster from './monster';

export let timeOut = false;

export default class Game {
    constructor() {
        this.monster = new Monster();
        this.time = 30000;
        this.score = 0;
        this.level = 1;
    }

    start() {
        const startGame = document.querySelector('.start-game');
        startGame.style.display = 'none';

        let timer = this.time/1000;
        const timerBoard = document.querySelector('.timer');
        const scoreBoard = document.querySelector('.score');
        scoreBoard.textContent = 0;
        timerBoard.textContent = timer;
        timeOut = false
        this.score = 0;
        this.monster.showUp();

        setTimeout(function(){
            timeOut = true;
        }, this.time);

        let startTimer = setInterval(function(){
            timer -= 1;
            timerBoard.textContent = timer;
            if (timer < 0) {
                timer = 0;
                clearInterval(startTimer);
                timerBoard.textContent = '0'
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

    addListenerForWhack() {
        const monsters = document.querySelectorAll('.monster');
        let that = this;
        
        monsters.forEach(monster => {
            monster.addEventListener('click', e => {
                e.preventDefault;
                that.whack(e);
            })
        })
    }
    
    whack(e) {
        const scoreBoard = document.querySelector('.score');
        this.score += 10;
        e.target.style.backgroundImage = 'url(./src/assets/flower_white.png)';
        e.target.style.pointerEvents = 'none';
        
        setTimeout(() => {
            e.target.style.backgroundImage = 'url(./src/assets/flower_yellow.png)';
            e.target.style.pointerEvents = 'all';
        }, 1000)
        
        scoreBoard.textContent = this.score;
    }

}