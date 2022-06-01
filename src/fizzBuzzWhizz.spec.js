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
  test('should return Buzz if is divisible by 5', () => {
    [10, 20, 25, 35].map((number) => {
      const result = game(number);
      expect(result).toEqual(GAME_WORDS.buzz);
    });
  });
  test('should return FizzBuzz if is divisible by 3 and 5', () => {
    [15, 30, 75].map((number) => {
      const result = game(number);
      expect(result).toEqual(GAME_WORDS.fizz.concat(GAME_WORDS.buzz));
    });
  });
  test('should return Whizz if the number is prime', () => {
    [2, 7].map((number) => {
      const result = game(number);
      expect(result).toEqual(GAME_WORDS.whizz);
    });
  });
  test('should return FizzWhizz if divisible by 3 and prime', () => {
    const result = game(3);
    expect(result).toEqual((GAME_WORDS.fizz.concat(GAME_WORDS.whizz)));
  });
});

describe('Prime function', () => {
  test('should return true if is prime number', () => {
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(number => expect(isPrime(number)).toBeTruthy());
  });
});

