import Bush from './bush';
import { timeOut } from './game';

export default class Monster {
    constructor() {
        this.bush = new Bush();
    }

    showUp() {
        const time = Math.random() * 1000 + 500;
        const bushes = document.querySelectorAll(".bush");
        let bush = this.bush.chooseRandomBush(bushes);
        bush.classList.add("up");

        setTimeout(() => {
            bush.classList.remove("up");
            if (!timeOut) {
                this.showUp();
            }
        }, time);

    }


}