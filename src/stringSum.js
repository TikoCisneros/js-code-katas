/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.
 */

const sum = (num1, num2) => {
  const summandOne = getNumericValueOrZero(num1);
  const summandTwo = getNumericValueOrZero(num2);
  return summandOne + summandTwo;
};

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