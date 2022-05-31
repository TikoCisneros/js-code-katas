import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('should works', () => {
    const value = '1';
    const resp = game(value);
    expect(resp).toEqual(value);
  });
});
