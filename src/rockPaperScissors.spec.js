import { game, GAME_MOVES, GAME_RESULTS } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('should get a draw if both players choose rock', () => {
    const playerOneMove = GAME_MOVES.rock;
    const playerTwoMove = GAME_MOVES.rock;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(GAME_RESULTS.draw);
  });
  test('should get "player one wins" if players select rock and scissors', () => {
    const playerOneMove = GAME_MOVES.rock;
    const playerTwoMove = GAME_MOVES.scissors;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(GAME_RESULTS.playerOneWins);
  });
  test('should get "player two wins" if players select rock and paper', () => {
    const playerOneMove = GAME_MOVES.rock;
    const playerTwoMove = GAME_MOVES.paper;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(GAME_RESULTS.playerTwoWins);
  });
  test('should get a draw if both players choose paper', () => {
    const playerOneMove = GAME_MOVES.paper;
    const playerTwoMove = GAME_MOVES.paper;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(GAME_RESULTS.draw);
  });
  test('should get "player one wins" if players select paper and rock', () => {
    const playerOneMove = GAME_MOVES.paper;
    const playerTwoMove = GAME_MOVES.rock;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(GAME_RESULTS.playerOneWins);
  });
  test('should get "player two wins" if players select paper and scissors', () => {
    const playerOneMove = GAME_MOVES.paper;
    const playerTwoMove = GAME_MOVES.scissors;
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe(GAME_RESULTS.playerTwoWins);
  });
});