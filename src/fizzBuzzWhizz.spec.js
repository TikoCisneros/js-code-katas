import { game, isPrime, GAME_WORDS } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should return number as a string', () => {
    const result = game(1);
    expect(result).toEqual('1');
  });
  test('should return Fizz if is divisible by 3', () => {
    [6, 9, 12, 18, 21].map((number) => {
      const result = game(number);
      expect(result).toEqual(GAME_WORDS.fizz);
    });
  });
});

describe('Prime function', () => {
  test('should return true if is prime number', () => {
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(number => expect(isPrime(number)).toBeTruthy());
  });
});

