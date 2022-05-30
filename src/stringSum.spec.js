import { sum } from "./stringSum";

describe('String Sum code kata', () => {
  test('should return zero when num1 and num2 are empty strings', () => {
    const num1 = ' ';
    const num2 = '';
    const resp = sum(num1, num2);
    expect(resp).toBe(0);
  });
});
