import Monster from './monster';

export let timeOut = false;

export default class Game {
    constructor() {
        this.monster = new Monster(this.level);
        this.time = 25000;
        this.score = 0;
        this.level = 1;
        this.addListenerToStart = this.addListenerToStart.bind(this);
        this.addListenerForWhack = this.addListenerForWhack.bind(this);
    }

    start() {
        const startGame = document.querySelector('.start-game');
        startGame.style.display = 'none';

        let timer = this.time/1000;
        const timerBoard = document.querySelector('.timer');
        const scoreBoard = document.querySelector('.score');
        scoreBoard.textContent = this.score;
        timerBoard.textContent = timer;
        timeOut = false
        
        // if (this.level === 2) {
        //     this.monster = new Monster(this.level);
        // }
        this.monster.showUp();

        setTimeout(function(){
            timeOut = true;
        }, this.time);

        let that = this;
        let startTimer = setInterval(function(){
            timer -= 1;
            timerBoard.textContent = timer;
            if (timer < 0) {
                timer = 0;
                clearInterval(startTimer);
                timerBoard.textContent = '0'
                that.end();
            } 
        }, 1000);
    }

    end() {
        // if (this.level === 1) {
            // const lastWave = document.querySelector('.last-wave');
            // lastWave.style.display = 'flex';
        // } else {
        const endGame = document.querySelector('.game-end');
        endGame.style.display = "flex"
        const scoreBoard = document.querySelector('.total-score');
        scoreBoard.textContent = this.score;
        // }
    }

    addListenerToStart() {
        const startButton = document.querySelector('.start');
        let that = this;
        startButton.addEventListener('click', e => {
            e.preventDefault();
            this.start();
        });
    }

    // addListernerTocontinue() {
    //     const continueButton = document.querySelector('.continue');
    //     const lastWave = document.querySelector('.last-wave');
    //     continueButton.addEventListener('click', e => {
    //         console.log(this);
    //         e.preventDefault();
    //         this.level += 1;
    //         lastWave.style.display = 'none';
    //         this.start();
    //     })
    // }

    replay() {
        const replayButton = document.querySelector('.replay');
        const endGame = document.querySelector('.game-end');
        replayButton.addEventListener('click', e => {
            e.preventDefault();
            this.level -= 1;
            this.score = 0;
            endGame.style.display = "none"
            this.start();
        })
    }

    addListenerForWhack() {
        const monsters = document.querySelectorAll('.monster');
        
        monsters.forEach(monster => {
            monster.addEventListener('click', e => {
                e.preventDefault;
                this.whack(e);
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
        }, 500)
        
        scoreBoard.textContent = this.score;
    }

}