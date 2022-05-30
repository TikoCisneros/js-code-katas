import { sum } from "./stringSum";

describe('String Sum code kata', () => {
  test('should return zero when num1 and num2 are empty strings', () => {
    const num1 = ' ';
    const num2 = '';
    const resp = sum(num1, num2);
    expect(resp).toBe(0);
  });
  test('should return zero when num1 and num2 are 0 strings', () => {
    const num1 = '0';
    const num2 = '0';
    const resp = sum(num1, num2);
    expect(resp).toBe(0);
  });
  test('should return the same numeric value when one of them is zero', () => {
    const num1 = '0';
    const num2 = '20';
    const resp = sum(num1, num2);
    expect(resp).toBe(20);
  });
  test('should return the same numeric value when one of them is non-natural number', () => {
    const num1 = '-10';
    const num2 = '12';
    const resp = sum(num1, num2);
    expect(resp).toBe(12);
  });
});
