/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw
*/
export const GAME_MOVES = Object.freeze({
  rock: "rock",
  scissors: "scissors",
  paper: "paper",
});

export const GAME_RESULTS = Object.freeze({
  draw: 0,
  playerOneWins: 1,
  playerTwoWins: 2,
});

export const game = (playerOneMove, playerTwoMove) => {
  if (
    (playerOneMove === GAME_MOVES.rock && playerTwoMove === GAME_MOVES.scissors) ||
    (playerOneMove === GAME_MOVES.paper && playerTwoMove === GAME_MOVES.rock) ||
    (playerOneMove === GAME_MOVES.scissors && playerTwoMove === GAME_MOVES.paper)
  ) {
    return GAME_RESULTS.playerOneWins;
  }

  if (
    (playerOneMove === GAME_MOVES.rock && playerTwoMove === GAME_MOVES.paper) ||
    (playerOneMove === GAME_MOVES.paper && playerTwoMove === GAME_MOVES.scissors) ||
    (playerOneMove === GAME_MOVES.scissors && playerTwoMove === GAME_MOVES.rock)
  ) {
    return GAME_RESULTS.playerTwoWins;
  }

  return GAME_RESULTS.draw;
};
