const bushes = document.querySelectorAll(".bush");

export default class Bush {
    chooseRandomBush() {
        let lastBush;

        const randomBush = Math.floor(Math.random() * bushes.length);
        const bush = bushes[randomBush];

        if (bush === lastBush) {
            return this.chooseRandomBush(bushes);
        }

        lastBush = bush;
        return bush;
    }
}