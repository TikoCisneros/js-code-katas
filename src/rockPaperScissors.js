/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw
*/

export const GAME_MOVES = Object.freeze({
  rock: 'rock',
});

export const GAME_RESULTS = Object.freeze({
  draw: 0,
});

export const game = (playerOneMove, playerTwoMove) => GAME_RESULTS.draw;