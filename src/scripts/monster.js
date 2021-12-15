import Bush from './bush';

export default class Monster {
    constructor() {
        this.bush = new Bush();
        this.timeOut = false;
    }

    showUp() {
        const time = Math.random() * 1000 + 500;
        const bushes = document.querySelectorAll(".bush");
        let bush = this.bush.chooseRandomBush(bushes);
        bush.classList.add("up");


        setTimeout(() => {
            bush.classList.remove("up");
            if (!this.timeOut) {
                this.showUp();
            }
        }, time);
        
    }


}