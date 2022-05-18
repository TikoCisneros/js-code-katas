import { sum } from "./stringSum";

describe('String Sum code kata', () => {
  test('should works', () => {
    const value = '1';
    const resp = sum(value);
    expect(resp).toEqual(value);
  });
});
