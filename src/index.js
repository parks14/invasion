import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game();
    game.addListenerToStart();
    game.addListenerForWhack();
})