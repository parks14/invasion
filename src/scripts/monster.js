import Bush from './bush';

export default class Monster {
    constructor() {
        this.bush = new Bush();
        this.timeOut = false;
        this.timer = 20000;
    }

    showUp() {
        const time = Math.random() * 1000 + 500;
        const bushes = document.querySelectorAll(".bush");
        const bush = this.bush.chooseRandomBush(bushes);
        bush.classList.add("up");


        setTimeout(function(){
            this.bush.classList.remove("up");
            if (!this.timeOut) this.showUp();
        }, time);
    }
}