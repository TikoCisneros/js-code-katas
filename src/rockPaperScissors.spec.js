import { game, GAME_MOVES, GAME_RESULTS } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('should get a draw if both players choose rock', () => {
    const playerOneMove = GAME_MOVES.rock;
    const playerTwoMove = GAME_MOVES.rock;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(GAME_RESULTS.draw);
  });
});