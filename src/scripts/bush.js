export default class Bush {
    chooseRandomBush(bushes) {
        let lastBush;

        const randomBush = Math.floor(Math.random() * bushes.length);
        const bush = bushes[randomBush];

        if (bush === lastBush) {
            return chooseRandomBush(bushes);
        }

        this.lastBush = bush;
        return bush;
    }
}