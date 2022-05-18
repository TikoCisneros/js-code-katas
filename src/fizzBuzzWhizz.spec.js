import { game, isPrime } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
});

describe('Prime function', () => {
  test('should return true if is prime number', () => {
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(number => expect(isPrime(number)).toBeTruthy());
  });
});

