import Bush from './bush';
import { timeOut } from './game';

export default class Monster {
    constructor(currentLvl) {
        this.bush = new Bush();
        this.level = currentLvl;
    }

    showUp() {
        const bushes = document.querySelectorAll(".bush");
        let bush = this.bush.chooseRandomBush(bushes);
        bush.classList.add("up");

        const time = Math.random() * 700 + 500;
        setTimeout(() => {
            bush.classList.remove("up");
            if (!timeOut) {
                this.showUp();
            }
        }, time);
    }
}