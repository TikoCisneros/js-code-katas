import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should works', () => {
    const value = '1';
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(value);
  });
});
