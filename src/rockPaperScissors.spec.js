import { game } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('should works', () => {
    const value = 'Rock';
    const resp = game(value);
    expect(resp).toEqual(value);
  });
});
