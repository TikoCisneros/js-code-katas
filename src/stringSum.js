/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.
 */

const sum = (...numbers) => {
  const summands = numbers.map((number) => getNumericValueOrZero(number));
  return sumNumbersInArray(summands);
};

const sumNumbersInArray = (summands) => summands.reduce((accumulator, current) => accumulator + current);

const getNumericValueOrZero = (num) => {
  if (num.trim().length === 0) {
    return 0;
  }

  const value = parseInt(num);
  if (value < 0) {
    return 0;
  }

  return value;
}

export { sum };