/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw
*/
export const GAME_MOVES = Object.freeze({
  rock: 'rock',
  scissors: 'scissors',
});

export const GAME_RESULTS = Object.freeze({
  draw: 0,
  playerOneWins: 1,
});

export const game = (playerOneMove, playerTwoMove) => {
  if (playerOneMove === GAME_MOVES.rock && playerTwoMove === GAME_MOVES.scissors) {
    return GAME_RESULTS.playerOneWins;
  }

  return GAME_RESULTS.draw;
};